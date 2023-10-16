import { Pipe, PipeTransform } from '@angular/core';
import { PageType } from '../../components/pagination/page.type';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform (value: readonly any[], args : PageType): any[] {
    // console.log(value)
    // console.log(args)
    if (!value?.length) return[]
    const {perPage, currentPage} = args;
    let startIndex = perPage *  currentPage;
    let newValue = value.slice(startIndex, startIndex + perPage);
    return newValue
  }
}
