export interface Dictionary {
    code: string;
    name: string;
    pair?: string;
    id?: string;
}

export interface DictionaryPaginated {
    data: Dictionary[];
    pageIndex: number;
    pageSize: number;
    totalPages: number;
    itemCount: number;
}

export interface DictionaryParameters {
    code?: string;
    search?: string;
    filter?: string;
    pageIndex?: number;
    pageSize?: number;
    lang?: string;
}
