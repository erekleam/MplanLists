using System.Data;
using System.Data.SqlClient;

namespace MPLAN_API.Data
{
    public class Connections
    {
        private readonly IConfiguration _config;

        public Connections(IConfiguration config)
        {
            _config = config;
        }
        public IDbConnection DictionaryConn
        {
            get
            {
                
                return new SqlConnection(_config.GetConnectionString("Dictionary"));
            }
        }
    }
}
