import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limpaSufixoCv'
})
export class LimpaSufixoCvPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    let sufixoNovo: string = value;
    sufixoNovo = sufixoNovo.replace(/TAB/g, "");
    return sufixoNovo;
  }

}
