import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  public newTodoTitle: string = '';
  
  public todos$: Observable<Todo[]> = new Observable<Todo[]>();

  addTodo() {
    throw new Error('Method not implemented.');
  }

  toggleTodo(arg0: any) {
    throw new Error('Method not implemented.');
  }

  deleteTodo(arg0: any) {
    throw new Error('Method not implemented.');
  }

}
