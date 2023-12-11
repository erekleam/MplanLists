using MPLAN_API.Core;
using MPLAN_API.Core.Dictionaries;
namespace MPLAN_API.Contract.Dictionaries
{
	public class DictionaryResponse : PagedData<DictionaryWithPair>
	{
		public DictionaryResponse(
			IReadOnlyCollection<DictionaryWithPair> items,
			int count,
			int pageIndex = 1,
			int pageSize = 10) : base(items, count, pageIndex, pageSize) { }
	}
}
