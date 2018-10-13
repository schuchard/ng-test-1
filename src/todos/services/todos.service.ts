import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Todo } from '@todos/models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  baseUrl = '/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(`${this.baseUrl}?_sort=id&_order=asc`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  createTodo(payload: Todo): Observable<Todo> {
    return this.http
      .post<Todo>(this.baseUrl, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  updateTodo(payload: Todo): Observable<Todo> {
    return this.http
      .put<Todo>(`${this.baseUrl}/${payload.id}`, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  removeTodo(payload: Todo): Observable<Todo> {
    return this.http
      .delete<any>(`${this.baseUrl}/${payload.id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
