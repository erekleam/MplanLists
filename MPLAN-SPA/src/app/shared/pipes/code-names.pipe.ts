import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs/operators';
import { Dictionary } from 'src/app/shared/models/dictionary.model';

@Pipe({
  name: 'codeNames'
})

export class CodeNamesPipe implements PipeTransform {

  constructor() {   }

  transform(value: any, args?: any): any {
    
  }
}
