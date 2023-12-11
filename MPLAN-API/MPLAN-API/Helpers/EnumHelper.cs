using System.Reflection;
namespace MPLAN_API.Helpers
{
	internal static class EnumHelper<T> where T : struct, Enum
	{
		internal class EnumItem
		{
			internal readonly T Value;
			internal readonly string DisplayName;

			internal EnumItem(T value, string displayName)
			{
				Value = value;
				DisplayName = displayName;
			}

			public override string ToString() => DisplayName;
		}

		private static readonly EnumItem[] Items;
		private static readonly Dictionary<T, EnumItem> ValueMap;
		private static readonly Dictionary<string, EnumItem> DisplayNameMap;

		static EnumHelper()
		{
			Type enumType = typeof(T);
			var values = (T[])Enum.GetValues(enumType);
			int[] intValues = values.Select(i => Convert.ToInt32(i)).ToArray();
			int count = intValues.Length;
			Items = new EnumItem[count];
			ValueMap = new Dictionary<T, EnumItem>(count);
			DisplayNameMap = new Dictionary<string, EnumItem>(count);

			for (int i = 0; i < count; i++)
			{
				T value = values[i];
				string name = value.ToString();
				FieldInfo info = enumType.GetField(name);
				if (info is null) continue;
				EnumNameAttribute attribute = info.GetCustomAttribute<EnumNameAttribute>();
				string displayName = attribute is null ? name : attribute.Name;
				var item = new EnumItem(value, displayName);
				Items[i] = item;
				ValueMap.Add(value, item);
				DisplayNameMap.Add(displayName, item);
			}
		}

		public static IReadOnlyCollection<EnumItem> GetItems() => Items;
		public static EnumItem GetItem(T value) => ValueMap.TryGetValue(value, out EnumItem item) ? item : null;
		public static EnumItem GetItem(string value) => DisplayNameMap.TryGetValue(value, out EnumItem item) ? item : null;
	}

	[AttributeUsage(AttributeTargets.Field, AllowMultiple = false)]
	internal sealed class EnumNameAttribute : Attribute
	{
		public string Name { get; }

		public EnumNameAttribute(string name)
		{
			Name = name;
		}
	}

	internal static class EnumExtensions
	{
		public static string GetDisplayName<T>(this T? value) where T : struct, Enum =>
		!value.HasValue ? string.Empty : GetEnumDisplayName(value.Value);

		public static string GetDisplayName<T>(this T value) where T : struct, Enum =>
			GetEnumDisplayName(value);

		private static string GetEnumDisplayName<T>(T value) where T : struct, Enum
		{
			if (!typeof(T).IsEnum)
				throw new ArgumentException("T must be an enumerated type");
			EnumHelper<T>.EnumItem item = EnumHelper<T>.GetItem(value);
			return item?.DisplayName ?? string.Empty;
		}

		public static T GetEnumValue<T>(this string value) where T : struct, Enum
		{
			if (!typeof(T).IsEnum)
				throw new ArgumentException("T must be an enumerated type");
			if (string.IsNullOrWhiteSpace(value)) throw new ArgumentNullException(nameof(value));
			EnumHelper<T>.EnumItem item = EnumHelper<T>.GetItem(value);
			return item?.Value ?? throw new ArgumentException("Could not match string value to enum");
		}
	}
}
