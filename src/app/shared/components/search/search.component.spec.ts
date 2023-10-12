import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { first } from 'rxjs';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;

    component.searchKey = '';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit when on submit or submit btn clicked', () => {
    const key = 'oliver';
    component.searchKey = key;

    fixture.detectChanges();
    component.search.pipe(first()).subscribe((value) => {
      expect(value).toEqual(key);
    });
    component.onSubmit();
  });
});
