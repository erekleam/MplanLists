import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule } from '@angular/forms';
import { BsDatepickerConfig, BsDatepickerModule, BsDaterangepickerConfig } from 'ngx-bootstrap/datepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import 'bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { defineLocale, enGbLocale, kaLocale, ruLocale } from 'ngx-bootstrap/chronos';
import { GrTranslateModule } from '..//app/translate';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateInitService } from './translate/translate-init.service';
import { TranslateInterceptorProvide } from './translate/translate.interceptor';
import {PaginationModule, PaginationConfig} from 'ngx-bootstrap/pagination';

defineLocale('ka', kaLocale);
defineLocale('en', enGbLocale);
defineLocale('ru', ruLocale);

const datepickerConfig = {
  dateInputFormat: 'DD/MM/YYYY',
  isAnimated: true,
  adaptivePosition: true,
  containerClass: 'theme-default gr-date-picker',
  returnFocusToInput: true,
};

export function getDatepickerConfig(): BsDatepickerConfig {
  return Object.assign(new BsDatepickerConfig(), datepickerConfig);
}
export function getDateRangepickerConfig(): BsDaterangepickerConfig {
  return Object.assign(new BsDaterangepickerConfig(), datepickerConfig);
}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TabsModule,
    PaginationModule,
    FormsModule,
    TranslateModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    GrTranslateModule.forRoot(),
    
  ],
  providers: [
    TranslateInterceptorProvide,
    PaginationConfig,
    { provide: BsDatepickerConfig, useFactory: getDatepickerConfig },
    
    { provide: BsDaterangepickerConfig, useFactory: getDateRangepickerConfig },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private translateInitSerivce: TranslateInitService) {

    translateInitSerivce.initLanguage();
}
}
