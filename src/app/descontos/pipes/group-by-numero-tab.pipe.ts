import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupByNumeroTab'
})
export class GroupByNumeroTabPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value = value.slice(0,8);
    if(value!== undefined && value!== null){
      return _.uniqBy(value, 'sufixoCv');
    }
    return value;
  }

}
