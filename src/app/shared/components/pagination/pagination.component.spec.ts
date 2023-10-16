import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import { first } from 'rxjs';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  const defaultPageOption = { currentPage: 0, perPage: 4 };
  const TOTAL_ITEMS = 50;
  const MAX_PAGE = 13;
  const lastPage = {
    ...defaultPageOption,
    currentPage: MAX_PAGE - 1,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationComponent],
    });
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.totalItems = TOTAL_ITEMS;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set set default page options', () => {
    expect(component.pageOptions).toEqual(defaultPageOption);
  });

  it('should set perPage from the input', () => {
    const perPage = 10; 
    component.perPage = perPage;

    fixture.detectChanges();
    component.ngOnInit()

    expect(component.perPage).toEqual(perPage);
  });

  it('should return correct no for max page', () => {
    expect(component.getMaxPage()).toEqual(MAX_PAGE);
  });

  describe('isLastPage method', () => {
    it('should return true for last page', () => {
      component.pageOptions.currentPage = lastPage.currentPage;
      fixture.detectChanges();

      expect(component.isLastPage()).toBeTrue();
    });

    it('should return false for page other than last page', () => {
      expect(component.isLastPage()).toBeFalse();
    });
  });

  describe('isFirstPage method', () => {
    it('should return true for first page', () => {
      fixture.detectChanges();

      expect(component.isFirstPage()).toBeTrue();
    });

    it('should return false for page other than first page', () => {
      component.pageOptions = lastPage;
      expect(component.isFirstPage()).toBeFalse();
    });
  });

  describe('page next method', () => {
    it('should update pageOption and emit on page next', () => {
      let expectedValue = {
        ...defaultPageOption,
        currentPage: 1,
      };
      component.onPageChange.pipe(first()).subscribe((value) => {
        expect(value).toEqual(expectedValue);
      });
      component.onPageNext();
      expect(component.pageOptions).toEqual(expectedValue);
    });

    it('should not update pageOption and emit on page next for last page', () => {
      spyOn(component.onPageChange, 'emit');
      component.pageOptions = lastPage;
      fixture.detectChanges();

      component.onPageNext();

      expect(component.pageOptions).toEqual(lastPage);
      expect(component.onPageChange.emit).not.toHaveBeenCalled();
    });
  });

  describe('page prev method', () => {
    it('should update pageOption and emit on page previous', () => {
      component.pageOptions = {
        ...defaultPageOption,
        currentPage: 1,
      };

      component.onPageChange.pipe(first()).subscribe((value) => {
        expect(value).toEqual(defaultPageOption);
      });
      component.onPagePrev();
      expect(component.pageOptions).toEqual(defaultPageOption);
    });

    it('should not update pageOption and not emit on page previous', () => {
      component.pageOptions = defaultPageOption;
      fixture.detectChanges();
      spyOn(component.onPageChange, 'emit');

      component.onPagePrev();
      expect(component.pageOptions).toEqual(defaultPageOption);
      expect(component.onPageChange.emit).not.toHaveBeenCalled();
    });
  });

  describe('select page method', () => {
    it('should select the page and emit', () => {
      spyOn(component.onPageChange, 'emit');
      component.selectPage(2);
      expect(component.onPageChange.emit).toHaveBeenCalledOnceWith(
        component.pageOptions
      );
    });
  });
});
