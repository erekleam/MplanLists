using Dapper;
using System.Data;

namespace MPLAN_API.Data
{
	internal static class DapperActions
	{
		private const int DefaultCommandTimeoutInSeconds = 60 * 5;

		internal static Task<IEnumerable<T>> DapperQueryAsync<T>(
			this IDbConnection connection,
			string sql,
			object param = null,
			CommandType? commandType = CommandType.StoredProcedure,
			IDbTransaction transaction = null,
			int? timeout = null,
			CancellationToken cancellationToken = default) =>
			connection.QueryAsync<T>(
				new CommandDefinition(
					sql,
					param,
					transaction,
					timeout ?? DefaultCommandTimeoutInSeconds,
					commandType,
					cancellationToken: cancellationToken));

		internal static Task<T> DapperQueryFirstAsync<T>(
			this IDbConnection connection,
			string sql,
			object param = null,
			CommandType? commandType = CommandType.StoredProcedure,
			IDbTransaction transaction = null,
			int? timeout = null,
			CancellationToken cancellationToken = default) =>
			connection.QueryFirstOrDefaultAsync<T>(
				new CommandDefinition(
					sql,
					param,
					transaction,
					timeout ?? DefaultCommandTimeoutInSeconds,
					commandType,
					cancellationToken: cancellationToken));

		internal static Task<int> DapperExecuteAsync(
			this IDbConnection connection,
			string sql,
			object param = null,
			CommandType? commandType = CommandType.StoredProcedure,
			IDbTransaction transaction = null,
			int? timeout = null,
			CancellationToken cancellationToken = default) =>
			connection.ExecuteAsync(
				new CommandDefinition(
					sql,
					param,
					transaction,
					timeout ?? DefaultCommandTimeoutInSeconds,
					commandType,
					cancellationToken: cancellationToken));
	}
}
