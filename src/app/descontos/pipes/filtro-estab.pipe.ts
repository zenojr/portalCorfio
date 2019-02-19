import { Descontos } from './../descontos.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroEstab',
  pure: false
})
export class FiltroEstabPipe implements PipeTransform {

  transform(items: any[], selectedOptionEstabVenda: string): any[] {
    if(!items) return[];
    if(!selectedOptionEstabVenda) return items;

    selectedOptionEstabVenda = selectedOptionEstabVenda.toLowerCase();
    return items.filter( data => {
      return data.toLowerCase().includes(selectedOptionEstabVenda);
    });
  }

}
