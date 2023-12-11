namespace MPLAN_API.Core.Constants
{
	internal static class ClaimNames
	{
		internal const string UserId = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier";
		internal const string Username = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name";
		internal const string Role = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";
		internal const string IdNum = nameof(IdNum);
		internal const string ClientId = nameof(ClientId);
		internal const string Station = nameof(Station);
	}
}
