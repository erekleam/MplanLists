using System.Security.Claims;
using System.Text.Json;
using MPLAN_API.Helpers;
namespace MPLAN_API.Core
{
	public sealed class ApplicationUser
	{
		public int IdNum { get; set; }
		public string UserId { get; set; }
		public string UserName { get; set; }
		public string ClientId { get; set; }
		public int ClientIdNumber => Convert.ToInt32(ClientId);
		public int Station { get; set; }
		public IReadOnlyCollection<string> Roles { get; set; } = Array.Empty<string>();

		public ApplicationUser() { }

		public ApplicationUser(ClaimsPrincipal principal)
		{
			UserId = principal.GetUserId();
			ClientId = principal.GetClientId();
			IdNum = principal.GetIdNum();
			Station = principal.GetStation();
			UserName = principal.GetUsername();
			Roles = principal.GetRoles();
		}

		public override string ToString() => JsonSerializer.Serialize(this);
	}
}
