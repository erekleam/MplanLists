import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MissingTranslationHandler, TranslateLoader, TranslateModule, TranslateModuleConfig } from '@ngx-translate/core';
import { Languages } from './languages.enum';

import { GrMissingTranslationHandler } from './missing-translation-handler';
import { GrTranslationLoader } from './translation-loader';

export function httpLoaderFactory(scopes: string | string[]): (http: HttpClient) => TranslateLoader {
    return (http: HttpClient) => new GrTranslationLoader(http, scopes);
}

export function translateConfig(scopes: string | string[]): TranslateModuleConfig {
    return {
        useDefaultLang: true,
        defaultLanguage: Languages.ka,
        loader: {
            provide: TranslateLoader,
            useFactory: httpLoaderFactory(scopes),
            deps: [HttpClient],
        },
    };
}

@NgModule()
export class GrTranslateModule {
    public static forRoot(scopes: string | string[] = [], config?: TranslateModuleConfig): ModuleWithProviders<TranslateModule> {
        return TranslateModule.forRoot({
            ...translateConfig([''].concat(scopes)),
            ...config,
        });
    }

    public static forChild(scopes: string | string[], config?: TranslateModuleConfig): ModuleWithProviders<TranslateModule> {
        return TranslateModule.forChild({
            ...translateConfig(scopes),
            extend: true,
            missingTranslationHandler: {
                provide: MissingTranslationHandler,
                useClass: GrMissingTranslationHandler,
            },
            ...config,
        });
    }
}
