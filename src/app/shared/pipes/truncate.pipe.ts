import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(
    value: string,
    limit = 12,
    completeWords = false,
    ellipsis = '...'
  ) {
    if (completeWords) {
      limit = value.substr(0, limit + 1).lastIndexOf(' ');
    }
    return `${value.substr(0, limit)}${ellipsis}`;
  }
}
