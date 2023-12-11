import { Dictionary } from "src/app/shared/models/dictionary.model";

export interface MplanFull{
    header: MplanHeader,
    details: MplanMestranDetails[],
    
}

export interface MplanHeader{
    statementType: number;
    fileType: string;
    dateFrom: Date;
    loadType: string;


    senderCountry: string;
    senderCountryText: string;
    senderStation:string;
    senderStationText: string;
    receiverCountry: string;
    receiverCountryText: string;
    receiverStation: string;
    receiverStationText: string;

    gzavnilisSaxeoba: string;
    tvirtiGNG: string;
    tvirtiGNGText: string;
    tvirtiWona: number;
    nishani: string;
    vagonisSaxeoba: string;
    vagonisRaodenoba: string;
    konteinerisZoma: string;
    konteinerisRaodenoba: number;
    loadSender: string;
    loadSenderText: string;
    loadReciever: string;
    loadRecieverText: string;
    // PortLoadReciever: string;
    // PortLoadRecieverText: string;
    // Port: string;
    // PortText: string;
    feedbackNote: string;
}

export interface MplanGetList{
    headerId: number;
    statementType: number;
    fileType: string;
    loadType: string;
    senderCountry: string;
    senderCountryName: string;
    senderStation: string;
    senderStationName: string;
    receiverCountry: string;
    receiverCountryName: string;
    receiverStation: string;
    receiverStationName: string;
    tvirtiGNG: string;
    tvirtiGNGName: string;
    tvirtiWona: number;
    gzavnilisSaxeoba: string;
    dateFrom: Date;
}



export interface MplanMestranDetails{
    
    transportingAdministrationCode: string;
    transportingAdministration: string;
    receiverDockingCode: string;
    receiverDockingSpot: string;
    code: string;
    forwarder: string;
}




export class fileTypesList{
    data: Data [];
    itemCount: number;
    pageIndex: number;
    pageSize: number;
    totalPages: number;
}


export class Data {
    pair: string;
    code: string;
    name: string;
    
}

export class transportingTypesList{
    data: Data [];
    itemCount: number;
    pageIndex: number;
    pageSize: number;
    totalPages: number;
}

export class shipmentTypesList{
    data: Data [];
    itemCount: number;
    pageIndex: number;
    pageSize: number;
    totalPages: number;
}
export class signTypesList{
    data: Data [];
    itemCount: number;
    pageIndex: number;
    pageSize: number;
    totalPages: number;
}
export class vagonTypesList{
    data: Data [];
    itemCount: number;
    pageIndex: number;
    pageSize: number;
    totalPages: number;
}
export class containerSizesList{
    data: Data [];
    itemCount: number;
    pageIndex: number;
    pageSize: number;
    totalPages: number;
}

export interface IMplanRouteStation{
    modify: boolean;
    id: number;
    headerid: number;
    ReceiverCountry: number;
    ReceiverStation: number;
    station: number;
    routeStation: number;
}