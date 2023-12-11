import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from './languages.enum';

@Injectable({
    providedIn: 'root',
})
export class TranslateInitService {
    public storedLanguage: Languages = Languages.ka;

    constructor(private translateService: TranslateService) {}

    public initLanguage(): void {
        this.storedLanguage = <Languages>localStorage.getItem('language');
        if (!this.storedLanguage) {
            localStorage.setItem('language', Languages.ka);
            this.storedLanguage = Languages.ka;
        }

        this.translateService.use(this.storedLanguage);

        this.translateService.onLangChange.subscribe((x) => {
            localStorage.setItem('language', <Languages>x.lang);
            this.storedLanguage = <Languages>x.lang;
        });
    }
}
