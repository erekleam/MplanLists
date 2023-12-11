import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DictionaryPaginated, DictionaryParameters } from 'src/app/shared/models/dictionary.model';
import { Languages } from 'src/app/translate/languages.enum';


@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {}

    public getDictionary(dictionary: string, query?: DictionaryParameters, lang: Languages = null) {
        let params = new HttpParams();

        if (query.code || +query.code === 0) {
            params = params.append('code', query.code);
        }
        if (query.search) {
            params = params.append('search', query.search);
        }
        if (query.filter) {
            params = params.append('filter', query.filter);
        }
        if (query.pageIndex) {
            params = params.append('pageIndex', '' + query.pageIndex);
        }
        if (query.pageSize) {
            params = params.append('pageSize', '' + query.pageSize);
        }
        if (query.lang) {
            params = params.append('lang', '' + query.lang);
        }

        const httpOptions = !!lang ? { headers: { 'Accept-Language': lang }, params } : { params };
       
        return this.http.get<DictionaryPaginated>(this.apiUrl + '/dictionary/' + dictionary, httpOptions);
    }

    

    


    // public getDictionary(dictionary: string, query?: DictionaryParameters) {
    //     console.log(query);
    //     let params = new HttpParams().append('dictionary', dictionary);

    //     if (query.code || +query.code === 0) {
    //         params = params.append('code', query.code);
    //     }
    //     if (query.search) {
    //         params = params.append('search', query.search);
    //     }
    //     if (query.filter) {
    //         params = params.append('filter', query.filter);
    //     }
    //     if (query.pageIndex) {
    //         params = params.append('pageIndex', '' + query.pageIndex);
    //     }
    //     if (query.pageSize) {
    //         params = params.append('pageSize', '' + query.pageSize);
    //     }
    //     if (query.lang) {
    //         params = params.append('lang', '' + query.lang);
    //     }

    //     return this.http.get<DictionaryPaginated>(this.apiUrl + '/dictionary', { params });
    // }
}
