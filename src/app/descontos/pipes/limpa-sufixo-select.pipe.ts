import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limpaSufixoSelect'
})
export class LimpaSufixoSelectPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let sufixoNovo: string = value;

    sufixoNovo =  sufixoNovo.substring(0, 7);

    return sufixoNovo;
  }

}
