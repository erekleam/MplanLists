import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalService } from './modal.service';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDatepickerConfig, BsDatepickerModule, BsDaterangepickerConfig } from 'ngx-bootstrap/datepicker';
import { SharedModule } from 'src/app/shared/shared.module';
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import { DictionaryModalComponent } from './components/dictionary-modal/dictionary-modal.component';


@NgModule({
  declarations: [
    DictionaryModalComponent,
    DictionaryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [ModalService]
})
export class ModalsModule { }
