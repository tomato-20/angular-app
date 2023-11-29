import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../../book-list/model/books.model';
import { BookReadingStatusEnum, CollectionItem } from '../model/CollectonItem';

@Injectable({ providedIn: 'root' })
export class CollectionApiService {
  private URL = 'http://localhost:3000/collections';

  constructor(private http: HttpClient) {}

  getCollection(): Observable<CollectionItem[]> {
    return this.http.get<CollectionItem[]>(this.URL);
  }

  addToCollection(book: Book) {
    let payload: CollectionItem = {
      ...book,
      readingStatus: BookReadingStatusEnum.ToRead,
    };
    return this.http.post<CollectionItem>(
      this.URL,
      payload,
      this.getHttpOptions()
    );
  }

  removeFromCollection(bookId: string) {
    return this.http.delete<Book>(`${this.URL}/${bookId}`);
  }

  getCollectionItemById(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.URL}/${id}`);
  }

  updateReadingStatus(
    id: string,
    readingStatus: BookReadingStatusEnum
  ): Observable<CollectionItem> {
    return this.http.patch<CollectionItem>(
      `${this.URL}/${id}`,
      {
        readingStatus: readingStatus,
      },
      this.getHttpOptions()
    );
  }

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }
}
