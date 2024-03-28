import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseUrl = 'http://localhost:3000/todos'

  constructor(private http: HttpClient) { }

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl)
  }

  updateTodo(todo: Todo): Observable<Todo> {
    console.log('in update todo service')
    const url = `${this.baseUrl}/${todo.id}`;
    return this.http.put<Todo>(url, todo);
  }

  deleteTodo(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url)
  }

  addTodo(todo: Todo): Observable<Todo>{
    return this.http.post<Todo>(this.baseUrl, todo)
  }
}
