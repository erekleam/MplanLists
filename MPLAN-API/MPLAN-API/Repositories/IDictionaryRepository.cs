using MPLAN_API.Core.Dictionaries;
using MPLAN_API.Core.Enums;
using MPLAN_API.Models;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
namespace MPLAN_API.Repositories
{
    public interface IDictionaryRepository
    {
        /*Task<DictionaryClasses> Dictionary();*/
        Task<IEnumerable<DictionaryWithPairAndTotal>> GetAsync(string name, string code, string search, string? filter, int? pageIndex, int? pageSize, Language language = Language.Ka, CancellationToken cancellationToken = default);
        Task<IEnumerable<DictionaryClasses>> insertData(DataTable Header, DataTable Details,CancellationToken cancellationToken = default);
        Task<IEnumerable<MplanGetList>> getMplanList();
        Task<Mplan_Header> SP_GetMplanOperationHeader(int Id);
        Task<Mplan_Details> SP_GetMplanOperationDetails(int Id);
        /*Task<IEnumerable<DictionaryWithId>> GetAsync(string type, Language language = Language.Ka, CancellationToken cancellationToken = default);
        Task<IEnumerable<DictionaryWithId>> GetAsync(IDbConnection conn, string type, Language language = Language.Ka,CancellationToken cancellationToken = default);*/

    }
}
