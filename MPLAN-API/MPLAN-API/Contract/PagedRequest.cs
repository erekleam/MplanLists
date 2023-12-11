


using MPLAN_API.Core.Constants;

namespace MPLAN_API.Contract
{
	public abstract class PagedRequest
	{
		public int PageIndex { get; set; } = AppConstants.DefaultPageIndex;
		public int PageSize { get; set; } = AppConstants.DefaultPageCount;
	}
}