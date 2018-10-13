import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@todos/models/todo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html'
})
export class TodosListComponent implements OnInit {
  @Input()
  todos: Todo[];

  constructor() {}

  ngOnInit() {}
}
