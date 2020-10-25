import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { TodoDataService } from '../service/data/todo-data.service';


export class Todo {

  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }

}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  message: string;
  // = [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Become expert in Angular', false, new Date()),
  //   new Todo(3, 'Visit USA', false, new Date())
  //   // {id: 1, description: 'Learn to Dance'},
  //   // {id: 2, description: 'Become expert in Angular'},
  //   // {id: 3, description: 'Visit India'}
  // ];

  // todo = {
  //   id : 1,
  //   description : 'Learn to Dance'
  // };

  constructor(
    private todoService: TodoDataService,
    private router: Router,
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    let username = this.basicAuthenticationService.getAuthenticatedUser();
    this.todoService.retrieveAllTodos(username).subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id) {
    console.log(`delete Todo : ${id}`);
    let username = this.basicAuthenticationService.getAuthenticatedUser();

    this.todoService.deleteTodo(username, id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete ${id} Successful`;
        this.refreshTodos();
      }
    );
  }

  updateTodo(id) {
    console.log(`update Todo : ${id}`);

    this.router.navigate(['todos', id]);

  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }

}
