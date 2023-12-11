namespace MPLAN_API.Helpers
{
	internal static class ContentTypeHelper
	{
		internal static string ToContentType(this string fileExtension) =>
			fileExtension switch
			{
				".htm" or ".html" or ".log" => "text/HTML",
				".txt" => "text/plain",
				".doc" or ".docx" => "application/ms-word",
				".tiff" or ".tif" => "image/tiff",
				".asf" => "video/x-ms-asf",
				".avi" => "video/avi",
				".zip" => "application/zip",
				".xls" or ".xlsx" or ".csv" => "application/vnd.ms-excel",
				".gif" => "image/gif",
				".jpg" or "jpeg" => "image/jpeg",
				".bmp" => "image/bmp",
				".wav" => "audio/wav",
				".mp3" => "audio/mpeg3",
				".mpg" or "mpeg" => "video/mpeg",
				".rtf" => "application/rtf",
				".asp" => "text/asp",
				".pdf" => "application/pdf",
				".fdf" => "application/vnd.fdf",
				".ppt" => "application/mspowerpoint",
				".dwg" => "image/vnd.dwg",
				".msg" => "application/msoutlook",
				".xml" or ".sdxl" => "application/xml",
				".xdp" => "application/vnd.adobe.xdp+xml",
				_ => "application/octet-stream",
			};
	}
}
