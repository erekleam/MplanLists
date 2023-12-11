import { Inject, Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, zip } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { TranslateLoader } from '@ngx-translate/core';

@Injectable()
export class GrTranslationLoader extends TranslateLoader implements OnDestroy {
    private static TRANSLATES_LOADED: { [lang: string]: { [scope: string]: boolean } } = {};
    private sortedScopes = typeof this.scopes === 'string' ? [this.scopes] : this.scopes.slice().sort((a, b) => a.length - b.length);

    private getURL(lang: string, scope: string): string {
        
        return `assets/translate/${scope ? scope + '/' : ''}${lang}.json`;
    }

    private loadScope(lang: string, scope: string): Observable<object> {
        return this.httpClient.get(this.getURL(lang, scope)).pipe(
            tap(() => {
                if (!GrTranslationLoader.TRANSLATES_LOADED[lang]) {
                    GrTranslationLoader.TRANSLATES_LOADED[lang] = {};
                }
                GrTranslationLoader.TRANSLATES_LOADED[lang][scope] = true;
            })
        );
    }

    private merge(scope: string, source: object, target: object): object {
        if (!scope) {
            return { ...target };
        }

        const parts = scope.split('.');
        const scopeKey = parts.pop();
        const result = { ...source };
        const sourceObj = parts.reduce((acc, key) => (acc[key] = typeof acc[key] === 'object' ? { ...acc[key] } : {}), result);
        sourceObj[scopeKey] = parts.reduce((res, key) => res[key] || {}, target)?.[scopeKey] || {};

        return result;
    }

    constructor(private httpClient: HttpClient,@Inject(String) private scopes: string | string[]) {
       
        super();
    }

    public ngOnDestroy(): void {
        GrTranslationLoader.TRANSLATES_LOADED = {};
    }

    public getTranslation(lang: string): Observable<object> {
        const loadScopes = this.sortedScopes.filter((s) => !GrTranslationLoader.TRANSLATES_LOADED?.[lang]?.[s]);
        if (!loadScopes.length) {
            return of({});
        }
        return zip(...loadScopes.map((s) => this.loadScope(lang, s))).pipe(
            map((translates) => translates.reduce((acc, t, i) => this.merge(loadScopes[i], acc, t), {}))
        );
    }
}
