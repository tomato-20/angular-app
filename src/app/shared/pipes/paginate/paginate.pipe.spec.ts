import { pipe } from 'rxjs';
import { PaginatePipe } from './paginate.pipe';
import { mockBookArray } from 'src/mocks/mockDatas';

describe('PaginatePipe', () => {
  const pipe = new PaginatePipe();
  let page = { currentPage: 0, perPage: 2 };
  
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

    it('should return empty array for falsy value', () => {
      expect(pipe.transform([],page)).toEqual([])
  })

  it('should filter array acc to perPage and currentPage', () => {
    expect(pipe.transform(mockBookArray, page)).toEqual(
      mockBookArray.slice(page.currentPage * page.perPage, page.perPage)
    );
  });
});
