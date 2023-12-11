
using MPLAN_API.Core.Constants;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Numerics;

namespace MPLAN_API.Models
{
    public class DictionaryClasses
    {
        public Mplan_Header Header { get; set; }
        /*public Mplan_Countries? MplanCountries { get; set; }*/
        /*public List<Mplan_Details> Details{ get; set; }*/
        public IEnumerable<Mplan_Details> Details { get; set; }

    }

    public class Mplan_Header
    {
        public long StatementType { get; set; }
        public string FileType { get; set; } = string.Empty;
        public DateTime DateFrom { get; set; }
        public string LoadType { get; set; } = string.Empty;


        public string SenderCountry { get; set; } = string.Empty;
        public string SenderCountryText { get; set; } = string.Empty;

        public string SenderStation { get; set; } = string.Empty;
        public string SenderStationText { get; set; } = string.Empty;
        public string ReceiverCountry { get; set; } = string.Empty;
        public string ReceiverCountryText { get; set; } = string.Empty;
        public string ReceiverStation { get; set; } = string.Empty;
        public string ReceiverStationText { get; set; } = string.Empty;


        public string GzavnilisSaxeoba { get; set; } = string.Empty;
        public string TvirtiGNG { get; set; } = string.Empty;
        public string TvirtiGNGText { get; set; } = string.Empty;
        public int TvirtiWona { get; set; }
        public string Nishani { get; set; } = string.Empty;
        public string VagonisSaxeoba { get; set; } = string.Empty;
        public string VagonisRaodenoba { get; set; } = string.Empty;
        public string KonteinerisZoma { get; set; } = string.Empty;
        public int KonteinerisRaodenoba { get; set; }

        public string LoadSender { get; set; } = string.Empty;
        public string LoadSenderText { get; set; } = string.Empty;

        public string LoadReciever { get; set; } = string.Empty;
        public string LoadRecieverText { get; set; } = string.Empty;
        /*public string PortLoadReciever { get; set; } = string.Empty;
        public string PortLoadRecieverText { get; set; } = string.Empty;
        public string Port { get; set; } = string.Empty;
        public string PortText { get; set; } = string.Empty;*/

        public string FeedbackNote { get; set; } = string.Empty;
    }

    /*public class MplanCountries
    {
        

        public IReadOnlyCollection<mestran> Mestran { get; set; } = Array.Empty<mestran>();


    }*/
    public class Mplan_Details
    {
        public string TransportingAdministrationCode { get; set; } = string.Empty;
        public string TransportingAdministration { get; set; } = string.Empty;
        public string ReceiverDockingCode { get; set; } = string.Empty;
        public string ReceiverDockingSpot { get; set; } = string.Empty;
        public string Code { get; set; } = string.Empty;
        public string Forwarder { get; set; } = string.Empty;

    }

    public class HeaderResponse
    {
        public int HeaderId { get; set; }
    }
    public class MplanGetList
    {
        public int HeaderId { get; set; }
        public string StatementType { get; set; } = string.Empty;
        public string FileType { get; set; } = string.Empty;

        public string LoadType { get; set; } = string.Empty;
        public string SenderCountry { get; set; } = string.Empty;
        public string SenderCountryName { get; set; } = string.Empty;
        public string SenderStation { get; set; } = string.Empty;
        public string SenderStationName { get; set; } = string.Empty;

        public string ReceiverCountry { get; set; } = string.Empty;
        public string ReceiverCountryName { get; set; } = string.Empty;
        public string ReceiverStation { get; set; } = string.Empty;
        public string ReceiverStationName { get; set; } = string.Empty;
        public string TvirtiGNG { get; set; } = string.Empty;
        public string TvirtiGNGName { get; set; } = string.Empty;
        public int TvirtiWona { get; set; }
        public string GzavnilisSaxeoba { get; set; } = string.Empty;
        public DateTime DateFrom { get; set; }
    }
    public class   DateRequest{
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public int SignDoc { get; set; }
        }


}
