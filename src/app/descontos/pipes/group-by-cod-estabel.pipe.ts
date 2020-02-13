import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupByCodEstabel'
})
export class GroupByCodEstabelPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value!== undefined && value!== null){
      return _.uniqBy(value, 'codEstabel');
    }
    return value;
  }

}
