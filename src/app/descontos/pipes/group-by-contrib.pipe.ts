import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupByContrib'
})
export class GroupByContribPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value!== undefined && value!== null){
      return _.uniqBy(value, 'contrib');
    }
    return value;
  }

}
