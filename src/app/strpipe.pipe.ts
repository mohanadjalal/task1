import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strpipe',
})
export class StrpipePipe implements PipeTransform {
  transform(value: string, op?: string): string {
    if (op === 'uppercase') return value.toUpperCase();
    else if (op === 'lowercase') return value.toLocaleLowerCase();
    else{
      console.log(value.split(' '));
      
      return value;

    }
  }
}
