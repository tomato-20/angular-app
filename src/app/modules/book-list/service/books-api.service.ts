import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, ObservedValueOf, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Book } from '../model/books.model';
import { AddBookModel } from '../model/add-book.model';
import ShortUniqueId from 'short-unique-id';

@Injectable({ providedIn: 'root' })
export class BooksApiService {
  private readonly BOOKS_URL: string = 'http://localhost:3000/books';
  constructor(private http: HttpClient) {}

  getBooks(): Observable<ReadonlyArray<Book>> {
    return this.http.get<Book[]>(this.BOOKS_URL).pipe(
      // catchError(this.handleError<Book[]>('getBooks',[])),
      map((books) => {
        // console.log(books);
        return books || [];
      })
    );
  }

  getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.BOOKS_URL}/${id}`);
  }

  addBook(book: AddBookModel): Observable<Book> {
    const { randomUUID } = new ShortUniqueId({ length: 10 });
    let payload: Book = {
      volumeInfo: {
        ...book,
      },
      id: randomUUID(),
    };
    console.log(payload);
    // return of(payload)
    return this.http.post<Book>(this.BOOKS_URL, payload, this.getHttpOptions());
  }

  deleteBook(id: string) {
    return this.http.delete<any>(`${this.BOOKS_URL}/${id}`);
  }

  updateBook(book: Book) {
    return this.http.put<Book>(`${this.BOOKS_URL}/${book.id}`, book, this.getHttpOptions());
  }

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }
}
