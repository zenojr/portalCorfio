import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupByUF'
})
export class GroupByUFPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value!== undefined && value!== null){
      return _.uniqBy(value, 'uf');
    }
    return value;
  }

}
