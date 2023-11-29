import { Injectable } from '@angular/core';
import { Todo } from '../models/todos.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosApiService {

  private SERVER_URL : string= "http://localhost:3000/todos"

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

  getTodos() : Observable<Todo[]>{
    return this.http.get<Todo[]>(this.SERVER_URL)
  }
  
  addTodo(todo: Todo) : Observable<Todo>{
    return this.http.post<Todo>(this.SERVER_URL,todo,this.httpOptions)
  }

  deleteTodo(todo: Todo): Observable<void> {
    return this.http.delete<void>(`${this.SERVER_URL}/${todo.id}`)
  }


}
