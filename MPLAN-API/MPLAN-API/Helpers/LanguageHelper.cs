using System.Globalization;
using MPLAN_API.Core.Enums;
namespace MPLAN_API.Helpers
{
	internal static class LanguageHelper
	{
		internal static Language GetCurrentLanguage()
		{
			try
			{
				string culture = CultureInfo.CurrentUICulture.TwoLetterISOLanguageName;
				return culture.GetEnumValue<Language>();
			}
			catch
			{
				return Language.Ka;
			}
		}
	}
}
