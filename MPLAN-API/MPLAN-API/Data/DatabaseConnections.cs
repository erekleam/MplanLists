using System.Data;

namespace MPLAN_API.Data
{
    public class DatabaseConnections
    {
        public delegate Task<IDbConnection> LocationDb(CancellationToken cancellationToken);
        public delegate Task<IDbConnection> IodvnakDb(CancellationToken cancellationToken);
    }
}
