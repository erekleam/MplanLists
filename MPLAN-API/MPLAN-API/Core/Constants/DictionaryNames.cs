

namespace MPLAN_API.Core.Constants
{
    internal static class DictionaryNames
    {
        internal const string DictionaryProcedure = "ShippingDocs_Dictionaries";
        internal const string Countries = "Countries";
        internal const string CountriesLong = "CountriesLong";
        internal const string InternStations = "InternStations";
        internal const string FrontierStations = "FrontierStations";
        internal const string Customers = "Customers";
        internal const string Goods = "Goods"; 
        internal const string fileTypes = "fileTypes";
        internal const string transportingTypes = "transportingTypes";
        internal const string shipmentTypes = "shipmentTypes";
        internal const string SignTypes = "SignTypes";
        internal const string vagonTypes = "vagonTypes";
        internal const string ParticipantAdministration = "ParticipantAdministration";
        internal const string expeditorDict = "expeditorDict";
        internal const string loadDict = "loadDict";

        internal static readonly string[] MplanDictionaries = new string[]
        {
            fileTypes,
            transportingTypes,
            shipmentTypes,
            SignTypes,
            vagonTypes,
            expeditorDict,
            loadDict
        };
    }

}
