// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { AddComponent } from './add.component';
// import { MockStore, provideMockStore } from '@ngrx/store/testing';
// import { AppState } from 'src/app/store/app.state';
// import { FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { AddBookModel } from 'src/app/components/book-list/model/add-book.model';
// import { BooksAdminActions } from '../../store/book-admin.action';

// describe('AddComponent', () => {
//   let component: AddComponent;
//   let fixture: ComponentFixture<AddComponent>;
//   let mockStore: MockStore<AppState>;

//   // const authors: FormArray = new FormArray([new FormControl('author1'), new FormControl('author2')]);
//   const authors :string[] = ['author1', 'author2'] 
//   let invalidState: AddBookModel = {
//     title: '',
//     description: '',
//     authors: [],
//     imageLinks: {
//       smallThumbnail: '',
//       thumbnail: '',
//     },
//   };

//   const validState: AddBookModel = {
//     title: 'title',
//     description: 'description',
//     authors: [],
//     imageLinks: {
//       smallThumbnail: 'https://thumbnauil.com/file/1/image.png',
//       thumbnail: 'https://thumbnauil.com/file/1/image.png',
//     },
//   };

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [AddComponent],
//       imports: [
//         ReactiveFormsModule,
//         MatInputModule,
//         MatButtonModule,
//         NoopAnimationsModule,
//       ],
//       providers: [provideMockStore()],
//     });

//     mockStore = TestBed.inject(MockStore);
//     fixture = TestBed.createComponent(AddComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//  it('should check initial form values for add book form', () => {
//     const addForm = component.addBookForm;
//     expect(addForm.value).toEqual(invalidState);
//   });

//   it('should be valid if the form is valid', () => {
//     component.addBookForm.setValue(validState);
//     expect(component.addBookForm.valid).toBeTrue();
//   });

//   it('should not be valid if the form is invalid', () => {
//     component.addBookForm.setValue(invalidState);
//     expect(component.addBookForm.valid).toBeFalse();
//   });

//   it('should allow form submition for valid value', () => {
//     spyOn(mockStore, 'dispatch');
//     component.addBookForm.setValue(validState);
//     component.onSubmitForm();
//     expect(mockStore.dispatch).toHaveBeenCalledWith(
//       BooksAdminActions.addBook({ book: validState })
//     );
//   });

//   it('should not allow form submition for invalid value', () => {
//     spyOn(mockStore, 'dispatch');
//     component.addBookForm.setValue(invalidState);
//     component.onSubmitForm();
//     expect(mockStore.dispatch).not.toHaveBeenCalled();
//   });

//   fit('should add form control for authors', () => {
//     component.addBookForm.setValue(validState);
//     component.authors.setValue(authors);
//     component.addAuthor();
//     fixture.detectChanges()
//     expect(component.authors.value).toEqual(authors);

//     // fixture.detectChanges()
//     // fixture.whenStable().then(() => {
//     //   let spyOnBtn = spyOn(component, 'addAuthor');
//     //   const addBtn = fixture.debugElement.query(
//     //     By.css('[data-test-id=add-author-btn]')
//     //   );
//     //   addBtn.triggerEventHandler('click');
//     //   expect(spyOnBtn).toHaveBeenCalledTimes(1);
//     // });
//   });

//   it('should add form control for authors', () => {
//     component.addBookForm.setValue(validState);
//     component.authors.setValue(authors);
//     component.deleteAuthor(1);

//     expect(component.authors.controls.length).toEqual(1);
//   });
// });
