using System.Data;
namespace MPLAN_API.Helpers
{
    internal static class MplanHelper
    {
        internal static DataTable CreateHeaderTable()
        {
            var table = new DataTable("Header");
            table.Columns.Add("StatementType", typeof(int));
            table.Columns.Add("FileType", typeof(string));
            table.Columns.Add("dateFrom", typeof(DateTime));
            table.Columns.Add("LoadType", typeof(string));
            return table;
        }


    }
}
