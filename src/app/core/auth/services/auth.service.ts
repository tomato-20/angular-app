import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  ObservedValueOf,
  catchError,
  map,
  of,
  tap,
} from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private URL = 'http://localhost:3000';
  private userSubject!: BehaviorSubject<User | null>;
  public user!: Observable<User | null>;

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject(
      JSON.parse(localStorage.getItem('user')!)
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue() {
    return this.userSubject.value;
  }

  login(email: string, password: string): Observable<User | null> {
    console.log(email, password);
    return this.http
      .get<any>(`${this.URL}/users?email=${email}&password=${password}`)
      .pipe(
        tap((user) => {
          if (user && user[0]) {
            // console.log(user[0]);
            localStorage.setItem('user', JSON.stringify(user[0]));
            this.userSubject.next(user[0]);
            this.router.navigate(['/home']);
          } else {
            throw new Error('Invalid email or Password!')
          }
        }),
        catchError((err) => {
          this.router.navigate(['/account/login'], {
            queryParams: { error: 'Invalid Email or Password!' },
          });
          console.log('err', err);
          return of(null);
        })
      );
  }

  logout(): void {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['account','login']);
  }
}
