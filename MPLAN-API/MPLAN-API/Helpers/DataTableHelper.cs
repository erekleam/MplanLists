using System.ComponentModel;
using System.Data;
using System.Reflection;

namespace MPLAN_API.Helpers
{
	internal static class DataTableHelper
	{
		internal static List<T> ToList<T>(this DataTable table) where T : class, new()
		{
			try
			{
				List<T> list = new();

				foreach (DataRow row in table.AsEnumerable())
				{
					T obj = row.ToModel<T>();
					if (obj is not null)
						list.Add(obj);
				}

				return list;
			}
			catch
			{
				return null;
			}
		}

		internal static T ToModel<T>(this DataTable table) where T : class, new() =>
			table.Rows[0].ToModel<T>();

		internal static DataTable ToDataTable<T>(this IEnumerable<T> source)
		{
			PropertyDescriptorCollection props = TypeDescriptor.GetProperties(typeof(T));
			DataTable table = new() { TableName = "Table" };

			for (int i = 0; i < props.Count; i++)
			{
				PropertyDescriptor prop = props[i];
				table.Columns.Add(prop.Name, prop.PropertyType);
			}

			object[] values = new object[props.Count];

			foreach (T item in source)
			{
				for (int i = 0; i < values.Length; i++)
				{
					values[i] = props[i].GetValue(item);
				}

				table.Rows.Add(values);
			}

			return table;
		}

		internal static DataTable ToDataTable<T>(this T source) where T : class
		{
			PropertyDescriptorCollection props = TypeDescriptor.GetProperties(typeof(T));
			DataTable table = new() { TableName = "Table" };

			for (int i = 0; i < props.Count; i++)
			{
				PropertyDescriptor prop = props[i];
				table.Columns.Add(prop.Name, prop.PropertyType);
			}

			object[] values = new object[props.Count];

			for (int i = 0; i < values.Length; i++)
			{
				values[i] = props[i].GetValue(source);
			}

			table.Rows.Add(values);

			return table;
		}

		private static T ToModel<T>(this DataRow row) where T : class, new()
		{
			try
			{
				T obj = new();

				foreach (PropertyInfo prop in obj.GetType().GetProperties())
				{
					try
					{
						PropertyInfo propertyInfo = obj.GetType().GetProperty(prop.Name);
						propertyInfo.SetValue(obj, Convert.ChangeType(row[prop.Name], propertyInfo.PropertyType), null);
					}
					catch
					{
						continue;
					}

				}

				return obj;
			}
			catch
			{
				return null;
			}
		}
	}
}
