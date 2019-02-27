import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limpaSufixoCv'
})
export class LimpaSufixoCvPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    let sufixoNovo: string = value;
    // sufixoNovo = sufixoNovo.replace(/TAB|X72|P3/gi, "");
    
    // sufixoNovo =  sufixoNovo.substring(4,7);
    sufixoNovo = sufixoNovo.slice( 0, 8 );
    return sufixoNovo;
  }

}
