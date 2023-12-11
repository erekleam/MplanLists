import { Component, OnDestroy,OnInit } from '@angular/core';
import { NavigationStart,Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { Languages } from 'src/app/translate/languages.enum';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit,OnDestroy {
  
  public toggle = false;
  public disablePointers = false;
  private route$: Subscription;
  public showHeader = true;
  public cargoUrl: string = environment.cargoUrl();

  constructor(private router: Router,private translateService: TranslateService){}

  public ngOnInit(): void {
  
  }
  public ngOnDestroy(): void {
    this.route$.unsubscribe();
  }

  

public changeLang(lang: Languages): void {
    this.translateService.use(lang);
}

public checkLang(lang: Languages): boolean {
    return this.translateService.currentLang === lang;
}
}


