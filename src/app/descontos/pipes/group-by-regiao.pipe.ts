import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupByRegiao'
})
export class GroupByRegiaoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if ( value !== undefined && value !== null) {
      return _.uniqBy(value, 'regiao');
    }
    return value;
  }

}
 