import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { Dictionary } from 'src/app/shared/models/dictionary.model';

import { MplanFull, containerSizesList, fileTypesList, shipmentTypesList, signTypesList, transportingTypesList, vagonTypesList } from '../../models/full-mplan.model';
import { IHeaderResponse } from '../../models/header-response';
@Injectable({
  providedIn: 'root'
})
export class MplanDictionaryService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private translateService: TranslateService) {
    }

    public getDictionaries(){
      // console.log(1);
      return this.http.get<fileTypesList>(this.apiUrl + '/dictionary/fileTypes');
    }
    public getSecDictionaries(){
      return this.http.get<transportingTypesList>(this.apiUrl + '/dictionary/transportingTypes');
    }

    public getThirdDictionaries(){
      return this.http.get<shipmentTypesList>(this.apiUrl + '/dictionary/shipmentTypes');
    }

    public getFourthDictionaries(){
      return this.http.get<signTypesList>(this.apiUrl + '/dictionary/signTypes');
    }

    public getFifthDictionaries(){
      return this.http.get<vagonTypesList>(this.apiUrl + '/dictionary/vagonTypes');
    }

    public getSixthDictionaries(){
      return this.http.get<containerSizesList>(this.apiUrl + '/dictionary/ContainerSizes');
    }

  public insertData(data: any) {
    return this.http.post<IHeaderResponse>(this.apiUrl + '/dictionary/insert-mplan', data);
  }

  public getMplanOperation(id: number) {
    // console.log(1);
    return this.http.post<MplanFull>(this.apiUrl + '/dictionary/get-mplan-operation', + id);
  }


  //------------------------------------------------------------------------------------------------------------------------------------------------
  // //AN

  // public saveMonthPlan(data:any){
  //   return this.http.post<any>(this.apiUrl+ '/insert-Data', data);
  // }



  //------------------------------------------------------------------------------------------------------------------------------------------------
    
    // public getSecondDictionaries(){
    //   return this.http.get<fileTypesList>(this.apiUrl + '/dictionary/transportingTypes');
    // }


  // public setDictionaries() {
  //   this.getDictionaries().subscribe((data) => {
  //     this.MplanDictionaries = data;
  //   });
  // }
    
}
