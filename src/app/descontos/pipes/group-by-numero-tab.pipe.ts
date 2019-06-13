import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupByNumeroTab'
})
export class GroupByNumeroTabPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (value !== undefined && value !== null) {
      // let newValue = value.slice(0, 6);
      let newValue: string = value;
      newValue = newValue.slice(0, 7);
      console.log(newValue);
      return _.uniqBy(newValue, 'sufixoCv');
    }
  }

}
