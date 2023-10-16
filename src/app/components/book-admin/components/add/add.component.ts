import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormArray,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, from, of } from 'rxjs';
import { AddBookModel } from 'src/app/components/book-list/model/add-book.model';
import { AppState } from 'src/app/store/app.state';
import { FormState } from '../../state/form.state';
import { BooksAdminActions } from '../../store/book-admin.action';
import { selectBookFormState } from '../../store/book-admin.selectors';

@Component({
  selector: 'app-book-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  addBookForm: FormGroup = new FormGroup({});

  formState$: Observable<FormState> = of({
    loading: false,
    success: false,
    error: '',
  });

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit() {
    const urlRegex =
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    const imageLinks = this.fb.group({
      smallThumbnail: ['', [Validators.required, Validators.pattern(urlRegex)]],
      thumbnail: ['', [Validators.required, Validators.pattern(urlRegex)]],
    });

    this.addBookForm = this.fb.group({
      title: ['', [Validators.required]],
      description: [''],
      authors: this.fb.array([this.fb.control('')]),
      imageLinks,
    });
  }

  get title() {
    return this.addBookForm.get('title');
  }
  get description() {
    return this.addBookForm.get('description');
  }
  get imageLinks() {
    return this.addBookForm.get('imageLinks');
  }

  get authors() {
    return this.addBookForm.get('authors') as FormArray;
  }

  get smallThumbnail() {
    return this.addBookForm.get('imageLinks.smallThumbnail')
  }

  get thumbnail() {
    return this.addBookForm.get('imageLinks.thumbnail')
  }
  addAuthor() {
    this.authors.push(this.fb.control(''));
  }

  deleteAuthor(i: number) {
    this.authors.removeAt(i);
  }

  async onSubmitForm() {
    this.formState$ = this.store.select(selectBookFormState);

    if (this.addBookForm.valid) {
      let formValue: AddBookModel = this.addBookForm.value;
      formValue.authors = formValue.authors?.filter((x) => !!x);
      console.log(formValue);
      this.store.dispatch(BooksAdminActions.addBook({ book: formValue }));
      this.resetForm();
      return;
    }
  }

  resetForm() {
    this.addBookForm.reset();
  }
}
