import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateAgo',
    pure: true,
})
export class DateAgoPipe implements PipeTransform {
    public transform(value: any, args?: any): any {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 29) {
                // less than 30 seconds ago will show as 'Just now'
                return 'ახლახანს';
            }
            const intervals = {
                წლის: 31536000,
                თვის: 2592000,
                კვირის: 604800,
                დღის: 86400,
                საათის: 3600,
                წუთის: 60,
                წამის: 1,
            };
            let counter;
            for (const i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0) {
                    if (counter === 1) {
                        return counter + ' ' + i + ' წინ'; // singular (1 day ago)
                    } else {
                        return counter + ' ' + i + ' წინ'; // plural (2 days ago)
                    }
                }
            }
        }
        return value;
    }
}
