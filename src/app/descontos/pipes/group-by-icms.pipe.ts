import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupByIcms'
})
export class GroupByIcmsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value!== undefined && value!== null){
      return _.uniqBy(value, 'icms');
    }
    return value;
  }

}
