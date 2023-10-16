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
import { Book, BookVolumeInfo } from 'src/app/components/book-list/model/books.model';
import { FormState } from 'src/app/components/book-list/state/form.state';
import { BooksActions, BooksApiActions } from 'src/app/components/book-list/store/books.action';
import { selectBookFormState } from 'src/app/components/book-list/store/books.selector';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-book-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  addBookForm: FormGroup = new FormGroup({});

  formState$ : Observable<FormState> = of({
    loading: false,
    success: false,
    error: ''
  });

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit() {
    const imageLinks = this.fb.group({
      smallThumbnail: [
        '',
        Validators.required,
        // Validators.pattern(
        //   '^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$'
        // ),
      ],
      thumbnail: [
        '',
        Validators.required,
        // Validators.pattern(
        //   '^(http(s)://.)[-a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$'
        // ),
      ],
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

  addAuthor() {
    this.authors.push(this.fb.control(''));
  }

  deleteAuthor(i: number) {
    this.authors.removeAt(i);
  }

  async onSubmitForm() {

    this.formState$ = this.store.select(selectBookFormState)

    if (this.addBookForm.valid) {
      let formValue: AddBookModel= this.addBookForm.value;
      formValue.authors = formValue.authors?.filter(x=>!!x)
      console.log(formValue);
      this.store.dispatch(BooksActions.addBook({book: formValue}))
      this.resetForm()
      return;
    }
  }

  resetForm() {
    this.addBookForm.reset()
  }
}
