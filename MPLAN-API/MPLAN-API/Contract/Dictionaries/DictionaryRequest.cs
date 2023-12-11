namespace MPLAN_API.Contract.Dictionaries
{
    public sealed class DictionaryRequest : PagedRequest
    {
            public string Code { get; set; } = string.Empty;
            public string Search { get; set; } = string.Empty;
            public string Filter { get; set; } = string.Empty;
        
    }
}
