import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MplanFull, MplanGetList } from '../../models/full-mplan.model';
import { ListAllService } from './list-all.service';


@Injectable({
  providedIn: 'root'
})
export class ListAllFormService {
  public date: FormControl;
  public code: FormControl;
  public text: FormControl;
  public dateFrom: FormControl;
  public dateTo: FormControl;
  public doc: FormControl;
  public table: MplanGetList[];
  public selected = null;
  public selectedRow = null;
  public loading = false;
  public isUpdate = false;
  public page = 1;
  public pageSize = 20;

  constructor(private listService: ListAllService) {
      const today = new Date();
      const yesterday = new Date();
      today.setHours(23, 59, 59, 999);
      yesterday.setHours(0, 0, 0, 0);
      yesterday.setDate(today.getDate() - 1);
      this.dateFrom = new FormControl(yesterday);
      this.dateTo = new FormControl(today);
      this.doc = new FormControl('1');

      this.code = new FormControl('0');
      this.text = new FormControl('');
  }

  public getMplanList() {
      this.table = [];
      this.selected = null;
      this.selectedRow = null;
      this.loading = true;
      this.page = 1;


      const fromDate = new Date(new Date(this.dateFrom.value.getTime() - this.dateFrom.value.getTimezoneOffset() * 60000).toJSON());
      const toDate = new Date(new Date(this.dateTo.value.getTime() - this.dateTo.value.getTimezoneOffset() * 60000).toJSON());
    //.getMplanList(fromDate,toDate)
      return this.listService
          .getMplanList(fromDate,toDate, +this.doc.value)
          .subscribe(
              (data) => {
                  this.table = data;
                   console.log(data);
              },
              (error) => {
                  this.table = [];
              }
          )
          .add(() => {
              this.loading = false;
          });
  }
  public select(index: number) {
      if (this.selectedRow == index) {
          this.deselect();
      } else {
          this.selectedRow = index;
          this.selected = this.table[this.selectedRow];
      }
  }

  public deselect() {
      this.selected = null;
      this.selectedRow = null;
  }
}
