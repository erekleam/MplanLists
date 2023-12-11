import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false,
})
export class FilterPipe implements PipeTransform {
    public transform(values: any[], args: any): any {
        if (!values || values == null || values == undefined || values.length <= 0) {
            return values;
        }
        return values.filter((item: any) => this.applyFilter(item, args));
    }

    public applyFilter(item: any, filter: any): boolean {
        let flag = false;
        if (item.value) {
            item = item.value;
        }
        Object.values(item).forEach((val) => {
            if (String(val).indexOf(filter) > -1) {
                flag = true;
                return;
            }
        });
        if (flag) {
            return item;
        }
    }
}
