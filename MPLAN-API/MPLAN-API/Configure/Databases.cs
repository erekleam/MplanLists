using System.Data;
using System.Data.SqlClient;
using static MPLAN_API.Data.DatabaseConnections;

namespace MPLAN_API.Configure
{
	internal static class Databases{
		internal static IServiceCollection AddDatabases(this IServiceCollection services)
	{
		static async Task<IDbConnection> GetOpenedConnectionAsync(string connectionString, CancellationToken cancellationToken)
		{
			SqlConnection connection = new(connectionString);
			if (connection.State != ConnectionState.Open)
				await connection.OpenAsync(cancellationToken);
			return connection;
		}


		services.AddSingleton<LocationDb>(sp => (CancellationToken cancellationToken) =>
		{
			string connectionString = sp.GetRequiredService<IConfiguration>().GetConnectionString(nameof(LocationDb));
			return GetOpenedConnectionAsync(connectionString, cancellationToken);
		});
		services.AddSingleton<IodvnakDb>(sp => (CancellationToken cancellationToken) =>
		{
			string connectionString = sp.GetRequiredService<IConfiguration>().GetConnectionString(nameof(IodvnakDb));
			return GetOpenedConnectionAsync(connectionString, cancellationToken);
		});


			return services;
	}
}
	
}
