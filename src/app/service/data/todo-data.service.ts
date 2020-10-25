import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL, TODO_JPA_API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }



  retrieveAllTodos(username) {
    //Use ` instead of ' , then you can use ${name}
    return this.http.get<Todo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`);
  }


  deleteTodo(username, id) {
    //Use ` instead of ' , then you can use ${name}
    return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }


  retrieveTodo(username, id) {
    //Use ` instead of ' , then you can use ${name}
    return this.http.get(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo) {
    return this.http.put(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`, todo);
  }

  createTodo(username, todo) {
    return this.http.post(`${TODO_JPA_API_URL}/users/${username}/todos`, todo);
  }

}
