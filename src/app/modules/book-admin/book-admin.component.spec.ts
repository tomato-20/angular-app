import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAdminComponent } from './book-admin.component';
import { Component } from '@angular/core';
import { AddComponent } from './components/add/add.component';
import { provideMockStore } from '@ngrx/store/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
@Component({
  selector: 'app-book-add',
  template: '<div></div>',
})
class MockAddComponent {}

describe('BookAdminComponent', () => {
  let component: BookAdminComponent;
  let fixture: ComponentFixture<BookAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookAdminComponent, AddComponent],
      providers: [provideMockStore()],
      imports: [ReactiveFormsModule, MatInputModule, MatButtonModule, NoopAnimationsModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(BookAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
