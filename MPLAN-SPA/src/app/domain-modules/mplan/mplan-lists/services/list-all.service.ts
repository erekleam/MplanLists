import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MplanFull, MplanGetList } from '../../models/full-mplan.model';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ListAllService {
    private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient,private translateService: TranslateService) {}


    //public getMplanList(fromDate: Date,toDate : Date) {
  public getMplanList(fromDate: Date,toDate : Date,signDoc: number,) {
      return this.http.post<MplanGetList[]>(this.apiUrl + '/dictionary/get-list-all', {FromDate: fromDate, ToDate: toDate,SignDoc:signDoc});
  }

  public loadFile(id: number, docType: number,docSign:number) {
      let params = new HttpParams();
      params = params.append('id', '' + id);
      params = params.append('docType', '' + docType);
      params = params.append('docSign', '' + docSign);
      return this.http.get(this.apiUrl + '/load-file', { params, responseType: 'arraybuffer' });
  }

  public loadTempFile(id: number, docType: number) {
      let params = new HttpParams();
      params = params.append('id', '' + id);
      params = params.append('docType', '' + docType);
      return this.http.get(this.apiUrl + '/load-temp-file', { params, responseType: 'arraybuffer' });
  }

  public checkGoodsDate(datefrom: Date, docid: number, doctypeid: number) {
      return this.http.post(this.apiUrl + '/check-goods-date', { Date: datefrom, HeaderID: docid, Doctype: doctypeid });
  }

  public checkDeclarationFile(id: number) {
      return this.http.post(this.apiUrl + '/check-declaration-file', +id);
  }

  public checkSignStatus(docid: number, username: string, idnum: number, hashcode: string) {
      return this.http.post(this.apiUrl + '/check-sign-status', { ID: +docid, IDNum: +idnum, UserName: username, HashCode: hashcode });
  }

  public uploadFile(headerid: number, formdata: FormData) {
      return this.http.post(this.apiUrl + '/upload-file?headerId=' + headerid, formdata);
  }

  public loadRsFile(filename: string) {
      let params = new HttpParams();
      params = params.append('filename', '' + filename);
      return this.http.get(this.apiUrl + '/load-rs-file', { params, responseType: 'arraybuffer' });
  }

  public deleteFile(id: number) {
      return this.http.post(this.apiUrl + '/delete-file', +id);
  }

  public getUploadedFiles(id: number) {
      return this.http.post(this.apiUrl + '/get-uploaded-files', +id);
  }
}
