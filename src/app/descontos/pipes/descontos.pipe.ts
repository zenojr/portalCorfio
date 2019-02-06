import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descontosContrib',
  pure: false
})
export class DescontosPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value? 'SIM' : 'NÃO';
  }

}
