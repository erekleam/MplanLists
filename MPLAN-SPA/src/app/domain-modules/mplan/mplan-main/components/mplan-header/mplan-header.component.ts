import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {BsLocaleService} from 'ngx-bootstrap/datepicker';
import { defineLocale, enGbLocale,kaLocale,ruLocale } from 'ngx-bootstrap/chronos';
import { fileTypesList, transportingTypesList } from '../../../models/full-mplan.model';
import { FormService } from '../../services/form.service';
import { MplanDictionaryService } from '../../services/mplan-dictionary.service';

defineLocale('ka', kaLocale);
defineLocale('en', enGbLocale);
defineLocale('ru', ruLocale);

@Component({
  selector: 'app-mplan-header',
  templateUrl: './mplan-header.component.html',
  styleUrls: ['./mplan-header.component.scss']
})
export class MplanHeaderComponent implements OnInit {
  public listFilter= new FormControl('');
  public StatementNumber: Number;
  public OperationDate: Date;
  public StatementType : number;
  public FileType: number;
  public LoadType: number;
  public isVisible: true;
  public fileTypeName: fileTypesList;
  public transportingTypeName: transportingTypesList;

  constructor(
    public localService: BsLocaleService, public form: FormService, public dictionary: MplanDictionaryService

  ) {

  }

  public subscriptions = [];
  isSelected = false;
  public minDate: Date;
  public maxDate: Date;

  ngOnInit(): void {
   


    this.dictionary.getDictionaries().subscribe( res => {
      this.fileTypeName = res;
    })

    this.dictionary.getSecDictionaries().subscribe( res => {
      this.transportingTypeName = res;
    })
    
    // this.dictionary.getSecondDictionaries().subscribe( res => {
    //   this.fileTypeName = res;
    //   console.log(this.fileTypeName)
    // })
    

  //  console.log(this.dictionary.MplanDictionaries)
    //2 DGIANI SHEZGUDVA DATEPICKERZE

    // this.minDate = new Date();
    // var nextDay = new Date(this.minDate);
    // nextDay.setDate(nextDay.getDate() + 1);
    // this.maxDate = nextDay;
  }

  

}
