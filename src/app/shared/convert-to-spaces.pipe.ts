import {Pipe, PipeTransform} from '@angular/core';

// @ts-ignore
@Pipe({
  name: 'ConvertToSpace'
})
export class ConvertToSpacesPipe implements PipeTransform{
  transform(value: string, character: string): string {
    return value.replace(character, ' ');
  }
}
