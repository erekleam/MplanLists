import { BsLocaleService } from 'ngx-bootstrap/datepicker';

export const setLangForPicker = (localeService: BsLocaleService, lang: string): void => {
    localeService.use(lang);
};
