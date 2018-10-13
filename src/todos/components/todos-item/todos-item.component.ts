import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { Store } from '@ngrx/store';
import { TodosState } from '@todos/store/reducers/todos.reducers';
import { Todo } from '@todos/models/todo';
import { UpdateTodo, RemoveTodo } from '@todos/store/actions/todos.actions';

@Component({
  selector: 'app-todos-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todos-item.component.html'
})
export class TodosItemComponent implements OnInit {
  @Input()
  todo: Todo;

  constructor(private store: Store<TodosState>) {}

  ngOnInit() {}

  removeTodo() {
    this.store.dispatch(new RemoveTodo(this.todo));
  }

  toggleComplete() {
    const todo = {
      ...this.todo,
      completed: !this.todo.completed
    };

    this.store.dispatch(new UpdateTodo(todo));
  }
}
