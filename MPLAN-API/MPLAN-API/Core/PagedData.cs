using MPLAN_API.Core.Constants;
namespace MPLAN_API.Core
{
	public class PagedData<T>
	{
		public IReadOnlyCollection<T> Data { get; set; }
		public int PageIndex { get; set; } = AppConstants.DefaultPageIndex;
		public int PageSize { get; set; } = AppConstants.DefaultPageCount;
		public int TotalPages { get; set; }
		public int ItemCount { get; set; }

		public PagedData(IReadOnlyCollection<T> items)
		{
			Data = items;
			ItemCount = items.Count;
			TotalPages = (int)Math.Ceiling(ItemCount / (double)PageSize);
		}

		public PagedData(
			IReadOnlyCollection<T> items,
			int count,
			int pageIndex = AppConstants.DefaultPageIndex,
			int pageSize = AppConstants.DefaultPageCount)
		{
			Data = items;
			ItemCount = count;
			PageIndex = pageIndex;
			PageSize = pageSize;
			TotalPages = (int)Math.Ceiling(count / (double)pageSize);
		}
	}
}
