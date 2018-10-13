import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TodosState } from '@todos/store/reducers/todos.reducers';
import { CreateTodo } from '@todos/store/actions/todos.actions';

@Component({
  selector: 'app-todos-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todos-form.component.html'
})
export class TodosFormComponent implements OnInit {
  todoForm: FormGroup;

  @ViewChild('todoDescription')
  todoDescription: ElementRef;

  constructor(private store: Store<TodosState>, private fb: FormBuilder) {}

  ngOnInit() {
    this.todoForm = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(2)]],
      completed: [false]
    });
  }

  resetForm() {
    this.todoForm.reset();
    this.todoForm.markAsPristine();
    this.todoForm.markAsUntouched();
    this.todoForm.controls['description'].setErrors(null);
    this.todoDescription.nativeElement.focus();
  }

  onSubmit() {
    this.store.dispatch(new CreateTodo(this.todoForm.value));
    this.resetForm();
  }
}
