import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Todo } from '@todos/models/todo';
import { TodosState } from '@todos/store/reducers/todos.reducers';
import { LoadTodos } from '@todos/store/actions/todos.actions';
import { getAllTodos } from '@todos/store/selectors/todos.selectors';

@Component({
  selector: 'app-todos',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todos.component.html'
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private store: Store<TodosState>) {
    this.todos$ = this.store.select(getAllTodos);
  }

  ngOnInit() {
    this.store.dispatch(new LoadTodos());
  }
}
