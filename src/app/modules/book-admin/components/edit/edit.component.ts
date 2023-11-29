import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from '@app/core/store/app.state';
import { Book, BookVolumeInfo } from '@app/modules/book-list/model/books.model';
import { Store } from '@ngrx/store';
import { Observable, Subscription, of } from 'rxjs';
import { selectBookById, selectStatus } from '../../store/book-admin.selectors';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookAdminActions } from '../../store/book-admin.action';
import { StateStatus } from '../../state/book-admin.state';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit, OnDestroy {
  editBookForm!: FormGroup;
  book$!: Observable<Book | undefined>;
  id!: string | null;
  subscriptions!: Subscription;
  formState$!: Observable<StateStatus>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (!this.id) {
      this.router.navigate(['not-found']);
      return;
    }
    this.book$ = this.store.select(selectBookById(this.id));
    this.editBookForm = this.buildEditForm();

    // update form values
    this.subscriptions = this.book$.subscribe({
      next: (book) => {
        if (book) {
          this.populateEditForm(book.volumeInfo);
          this.formState$ = this.store.select(selectStatus);
        }
      },
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private buildEditForm() {
    const urlRegex =
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    return this.fb.group({
      title: ['', Validators.required],
      description: [''],
      authors: this.fb.array([this.fb.control('')]),
      imageLinks: this.fb.group({
        smallThumbnail: [
          '',
          [Validators.required, Validators.pattern(urlRegex)],
        ],
        thumbnail: ['', [Validators.required, Validators.pattern(urlRegex)]],
      }),
    });
  }

  private populateEditForm(value: BookVolumeInfo) {
    const { authors, ...valueWithoutAuthors } = value;
    this.editBookForm.patchValue(valueWithoutAuthors);
    if (authors) {
      const authorControls = authors?.map((author) => this.fb.control(author));
      const authorsFormArray = this.fb.array(authorControls);
      this.editBookForm.setControl('authors', authorsFormArray);
    }
  }

  get f() {
    return this.editBookForm.controls;
  }

  get authors() {
    return this.editBookForm.get('authors') as FormArray;
  }

  get imageLinks() {
    return this.editBookForm.get('imageLinks') as FormGroup;
  }

  addAuthor() {
    return this.authors.push(this.fb.control(''));
  }

  removeAuthor(i: number) {
    this.authors.removeAt(i);
  }

  submit() {
    if (!this.editBookForm.invalid && this.id) {
      let formValue = this.editBookForm.value;
      const book: Book = {
        id: this.id,
        volumeInfo: { ...formValue },
      };
      this.store.dispatch(BookAdminActions.editBook({ book }));
    }
  }
}
