import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormArray,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddBookModel } from '@app/modules/book-list/model/add-book.model';
import { AppState } from '@core/store/app.state';
import { BookAdminActions } from '../../store/book-admin.action';
import { Observable, of } from 'rxjs';
import { BookAdminState, StateStatus } from '../../state/book-admin.state';
import { selectStatus } from '../../store/book-admin.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  addBookForm: FormGroup = new FormGroup({});

  formState$!: Observable<StateStatus> ; 

  constructor(private fb: FormBuilder, private store: Store, private router: Router) {}

  ngOnInit() {
    this.addBookForm = this.buildAddForm();
    this.formState$ = this.store.select(selectStatus);
  
  }

  buildAddForm(): FormGroup {
    const urlRegex =
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    const imageLinks = this.fb.group({
      smallThumbnail: ['', [Validators.required, Validators.pattern(urlRegex)]],
      thumbnail: ['', [Validators.required, Validators.pattern(urlRegex)]],
    });
    return this.fb.group({
      title: ['', [Validators.required]],
      description: [''],
      authors: this.fb.array(['']),
      imageLinks,
    });
  }

  get authors() {
    return this.addBookForm.get('authors') as FormArray;
  }

  get smallThumbnail() {
    return this.addBookForm.get('imageLinks.smallThumbnail');
  }

  get thumbnail() {
    return this.addBookForm.get('imageLinks.thumbnail');
  }
  addAuthor() {
    this.authors.push(this.fb.control(''));
  }

  deleteAuthor(i: number) {
    this.authors.removeAt(i);
  }

  async onSubmitForm() {
    if (this.addBookForm.valid) {
      let formValue: AddBookModel = this.addBookForm.value;
      formValue.authors = formValue.authors?.filter((x) => !!x);
      console.log(formValue);
      this.store.dispatch(BookAdminActions.addBook({ book: formValue }));
      this.resetForm();
      return;
    }
  }

  resetForm() {
    this.addBookForm.reset();
  }

  gotoBookListAfterSuccess() {
    this.store.dispatch(BookAdminActions.resetFormSubmitionStatus())
    // this.router.navigate(['home','list'])
  }
}
