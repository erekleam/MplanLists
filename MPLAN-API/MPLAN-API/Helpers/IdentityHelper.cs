using System.Security.Claims;
using MPLAN_API.Core.Constants;
namespace MPLAN_API.Helpers
{
	internal static class IdentityHelper
	{
		internal static string GetUserId(this ClaimsPrincipal principal) =>
			principal.FindFirstValue(ClaimNames.UserId);

		internal static string GetUsername(this ClaimsPrincipal principal) =>
			principal.FindFirstValue(ClaimNames.Username);

		internal static int GetIdNum(this ClaimsPrincipal principal) =>
			Convert.ToInt32(principal.FindFirstValue(ClaimNames.IdNum));

		internal static string GetClientId(this ClaimsPrincipal principal) =>
			principal.FindFirstValue(ClaimNames.ClientId);

		internal static int GetStation(this ClaimsPrincipal principal) =>
			Convert.ToInt32(principal.FindFirstValue(ClaimNames.Station));

		internal static string[] GetRoles(this ClaimsPrincipal principal) =>
			principal.FindAll(x => x.Type == ClaimNames.Role).Select(x => x.Value).ToArray();
	}
}
