using MPLAN_API.Models;
using MPLAN_API.Data;
using System.Data;
using System.Net;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.OpenApi.Extensions;
using MPLAN_API.Core;
using MPLAN_API.Core.Dictionaries;
using MPLAN_API.Core.Enums;
using static MPLAN_API.Data.DatabaseConnections;
using MPLAN_API.Core.Constants;
using System.Collections.Concurrent;
using MPLAN_API.Helpers;
using Dapper;
using System.Threading;

namespace MPLAN_API.Repositories
{
    public class DictionaryRepository
    {
		private readonly LocationDb _locationDb;
		private readonly IodvnakDb _IodvnakDb;

		public DictionaryRepository(LocationDb locationDb, IodvnakDb IodvnakDb)
		{
			_locationDb = locationDb;
			_IodvnakDb = IodvnakDb;
		}
		/*public DictionaryRepository(LocationDb2 locationDb2)
		{
			_locationDb2 = locationDb2;
		}*/
		public async Task<IEnumerable<DictionaryWithPairAndTotal>> GetAsync(
		string name,
		string code,
		string search,
		string filter,
		int pageIndex,
		int pageSize,
		Language language = Language.Ka,
		CancellationToken cancellationToken = default)
		{
            try
            {
				using IDbConnection conn = await _locationDb(cancellationToken);
				return await conn.DapperQueryAsync<DictionaryWithPairAndTotal>(
					DictionaryNames.DictionaryProcedure,
					new
					{
						DictionaryName = name,
						Code = code,
						Search = search,
						Filter = filter,
						PageIndex = pageIndex,
						PageSize = pageSize,
						Lang = language.GetDisplayName()
					},
					cancellationToken: cancellationToken);
			}
            catch (Exception ex)
            {

                throw;
            }
			
		}
		public async Task<DictionaryClasses> insertData(DataTable Header, DataTable Details,CancellationToken cancellationToken = default)
		{
			string sql = "MonthPlan_SP_AddEditMonthPlan";
			var _params = new
			{

				
				MPLAN_Header = Header.AsTableValuedParameter("MPLANHeaderTypes"),
				MPLAN_Details = Details.AsTableValuedParameter("MPLANDetailsTypess")
			};
			using IDbConnection conn = await _IodvnakDb(cancellationToken);
			return await conn.DapperQueryFirstAsync<DictionaryClasses>(sql, _params, cancellationToken: cancellationToken);

		}

        /*public async Task<IEnumerable<MplanGetList>> getMplanList()
		{
			string sql = "MonthPlan_SP_Get_List";
			return await new DapperActions().DapperQuery<MplanGetList>(_connections.DictionaryConn, sql);
		}
		*/
        public async Task<IEnumerable<MplanGetList>> getMplanList(DateTime FromDate , DateTime ToDate, int SignDoc,CancellationToken cancellationToken = default)
        {
            try
            {
				string sql = "MonthPlan_SP_Get_List";
				using IDbConnection conn = await _IodvnakDb(cancellationToken);
				return await conn.DapperQueryAsync<MplanGetList>(sql, new
				{
					FromDate = FromDate,
					ToDate = ToDate,
					SignDoc = SignDoc,
				},
					cancellationToken: cancellationToken);
			}
            catch (Exception ex)
            {

                throw;
            }
            
        }

		public async Task<Mplan_Header> SP_MplanOperationHeader(int Id, CancellationToken cancellationToken = default)
		{
			string sql = "MonthPlan_SP_GetMplanHeader";
			using IDbConnection conn = await _IodvnakDb(cancellationToken);
			return await conn.DapperQueryFirstAsync<Mplan_Header>(sql, new
			{
				Id

			},
			   cancellationToken: cancellationToken);
		}

		public async Task<IEnumerable<Mplan_Details>> SP_GetMplanOperationDetails(int Id, CancellationToken cancellationToken = default)
		{
			string sql = "MonthPlan_SP_GetMplanDetails";
			using IDbConnection conn = await _IodvnakDb(cancellationToken);
			return await conn.DapperQueryAsync<Mplan_Details>(sql, new
			{
				headerId = Id

			},
			   cancellationToken: cancellationToken); 
		}


		/*public async Task<IEnumerable<DictionaryWithId>> GetSmgsAsync(
		string type,
		Language language = Language.Ka,
		CancellationToken cancellationToken = default)
		{
			using IDbConnection conn = await _locationDb(cancellationToken);
			return await GetSmgsAsync(conn, type, language, cancellationToken);
		}

		private static Task<IEnumerable<DictionaryWithId>> GetSmgsAsync(
			IDbConnection conn,
			string type,
			Language language = Language.Ka,
			CancellationToken cancellationToken = default) =>
			conn.DapperQueryAsync<DictionaryWithId>(
				DictionaryNames.DictionaryProcedure,
				new
				{
					ID = 0,
					Type = type,
					Code = "",
					Name = "",
					Lang = language.GetDisplayName()
				},
				cancellationToken: cancellationToken);

		public async Task<IDictionary<string, IReadOnlyCollection<DictionaryWithId>>> GetSmgsDictionariesAsync(
			Language language = Language.Ka,
			CancellationToken cancellationToken = default)
		{
			ConcurrentDictionary<string, IReadOnlyCollection<DictionaryWithId>> results = new();
			using IDbConnection conn = await _locationDb(cancellationToken);
			await Task.WhenAll(DictionaryNames.MplanDictionaries.Select(async type =>
			{
				DictionaryWithId[]? value = (await GetSmgsAsync(conn, type, language, cancellationToken))?.ToArray();
				results.TryAdd(type, value);
			}));
			return results;
		}*/
	}



}
