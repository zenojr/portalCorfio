import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupByNumeroTab'
})
export class GroupByNumeroTabPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(value !== undefined && value !== null) {
      let newValue = value.slice(3, 6);
      return _.uniqBy(newValue, 'sufixoCv');
    }
  }

}
