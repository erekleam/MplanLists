using System.Security.Cryptography;
using System.Text;
using MPLAN_API.Core.Constants;

namespace MPLAN_API.Helpers
{
	internal static class HashHelper
	{
		internal static string ToSha256(this object source)
		{
			using var hash = SHA256.Create();
			return string.Join(
				"",
				hash.ComputeHash(
					Encoding.UTF8.GetBytes(source.ToString() + AppConstants.DefaultHashCode))
				.Select(item => item.ToString("x2")));
		}

	
	}
}
