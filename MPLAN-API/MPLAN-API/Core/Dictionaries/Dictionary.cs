namespace MPLAN_API.Core.Dictionaries
{
    public class Dictionary
    {
        public string Code { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
    }

    public sealed class DictionaryWithId : Dictionary
    {
        public string Id { get; set; } = string.Empty;
    }

    public class DictionaryWithPair : Dictionary
    {
        public string Pair { get; set; } = string.Empty;
    }

    public sealed class DictionaryWithPairAndTotal : DictionaryWithPair
    {
        public int Total { get; set; } 
    }
}

