import { DescontosComponent } from './../descontos.component';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPorEstabelecimento'
})
export class FiltroPorEstabelecimentoPipe implements PipeTransform {

  transform(descontosComponent: DescontosComponent, digitado: string): DescontosComponent[] {
      digitado = digitado.toLowerCase();
      return 
  }

}
