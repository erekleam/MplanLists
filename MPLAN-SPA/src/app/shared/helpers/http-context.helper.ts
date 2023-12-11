import { HttpContextToken, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export const BYPASS_LOG = new HttpContextToken(() => false);

export const ShouldIgnoreInterceptor = (req: HttpRequest<unknown>) => {
    return req.context.get(BYPASS_LOG) === true;
};

export const IsApiUrl = (req: HttpRequest<unknown>): boolean => {
    return req.url.startsWith(environment.apiUrl);
};

export const IsUrlRoot = (url: string): boolean => {
    return url && url !== '' && url !== '/';
};
