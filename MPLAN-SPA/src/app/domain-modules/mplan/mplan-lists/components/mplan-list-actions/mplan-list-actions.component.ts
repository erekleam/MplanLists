import { Component,OnInit, OnDestroy } from '@angular/core';
import { ListAllFormService } from '../../services/list-all-form.service';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/modals/modal.service';
import { setLangForPicker } from 'src/app/translate/translate.helper';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mplan-list-actions',
  templateUrl: './mplan-list-actions.component.html',
  styleUrls: ['./mplan-list-actions.component.scss']
})
export class MplanListActionsComponent implements OnInit, OnDestroy  {
  public lang$: Subscription;

  constructor(
      private localService: BsLocaleService,
      private translateService: TranslateService,
      public listForm: ListAllFormService,
      private router: Router,
      public modal: ModalService
  ) {}

  public ngOnInit(): void {
      setLangForPicker(this.localService, this.translateService.currentLang);
      this.lang$ = this.translateService.onLangChange.subscribe((x) => {
          setLangForPicker(this.localService, this.translateService.currentLang);
      });
  }

  public ngOnDestroy(): void {
      this.lang$?.unsubscribe();
  }
  
}
