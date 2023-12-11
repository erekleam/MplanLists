import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/modals/modal.service';
import { TranslateService } from '@ngx-translate/core';
import { MplanFull } from '../../../models/full-mplan.model';
import { ListAllService } from '../../services/list-all.service';
import { ListAllFormService } from '../../services/list-all-form.service';
import { Languages } from 'src/app/translate/languages.enum';
import { defineLocale, enGbLocale, kaLocale, ruLocale } from 'ngx-bootstrap/chronos';
defineLocale('ka', kaLocale);
defineLocale('en', enGbLocale);
defineLocale('ru', ruLocale);
@Component({
  selector: 'app-mplan-list-table',
  templateUrl: './mplan-list-table.component.html',
  styleUrls: ['./mplan-list-table.component.scss']
})
export class MplanListTableComponent {
  public listFilter = new FormControl('');

    public list: MplanFull[] = [];

    constructor(
        public listForm: ListAllFormService,

        private service: ListAllService,

        private router: Router,
        private modalService: ModalService,
        private translateService: TranslateService
    ) {}

    public ngOnInit(): void {
        this.listForm.doc.valueChanges.subscribe((x) => {
            this.listForm.getMplanList();
            
        });
        
        
        
    }

    
    Search() {
        this.listForm.page = 1;
    }





}
