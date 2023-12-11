import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TranslateInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       var DicLang = localStorage.getItem('dictionary-language');
        if (!DicLang)
            DicLang = localStorage.getItem('language');
        req = req.clone({
            setHeaders: { 'Content-Language': '' + DicLang  },
        });
        return next.handle(req);
    }
}

export const TranslateInterceptorProvide = {
    provide: HTTP_INTERCEPTORS,
    useClass: TranslateInterceptor,
    multi: true,
};
