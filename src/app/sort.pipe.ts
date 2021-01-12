import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'sort' })
export class sort implements PipeTransform {
  transform(value: any[], sortVal: string) {
    if (sortVal != '') {
      return value.filter((item) => item.firstName.toLowerCase().includes(sortVal)||item.lastName.toLowerCase().includes(sortVal) );
    }
    return value;
  }
}
