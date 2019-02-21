import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numElem',

//pipe impuro
  pure: false
})
export class NumElemPipe implements PipeTransform {

  transform(cadena: any[]): number {

    return cadena.length;
  }

}
