import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, ObservedValueOf, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Book } from '../model/books.model';

@Injectable({ providedIn: 'root' })
export class BooksApiService {

  private readonly BooksURL : string = 'http://localhost:3000/books'
  constructor(private http: HttpClient) {}

  getBooks(): Observable<ReadonlyArray<Book>> {
    return this.http.get<Book[]>(this.BooksURL)
    .pipe(
      // catchError(this.handleError<Book[]>('getBooks',[])),
      map((books) => {
        // console.log(books);
        return books || [];
      })
    );
  }

  getBookById(id: string) : Observable<Book> {
    return this.http.get<Book> (`${this.BooksURL}/${id}`)
  }

  // private handleError<Type>(context='context', result?: Type) {
  //   return (error: any) : Observable<Type> => {
  //     // keep the log somewhere on server? a file?s
  //     console.error(error)

  //     // do smth to let user know the error occured 
  //     // error.error => client side 
  //     // error.message => server side error
  //     console.log(error)

  //     // return fallback value to keep app running 
  //     // return of(result as Type)
  //     return of(error);
  //   }
  // }
}
