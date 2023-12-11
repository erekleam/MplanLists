using Microsoft.AspNetCore.Mvc;
using MPLAN_API.Core;
using MPLAN_API.Core.Enums;
using MPLAN_API.Helpers;
namespace MPLAN_API.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	[Produces("application/json;")]
	[ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
	public class ApiControllerBase : ControllerBase
	{
		private ApplicationUser _user = null;

		internal ApplicationUser CurrentUser
		{
			get
			{
				if (_user is not null)
					return _user;
				_user = new ApplicationUser(User);
				return _user;
			}
		}

		internal static Language CurrentLanguage => LanguageHelper.GetCurrentLanguage();
	}
}
