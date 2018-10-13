import { Action } from '@ngrx/store';
import { Todo } from '@todos/models/todo';

// load Todos
export const LOAD_TODOS = '[Todos] Load Todos';
export const LOAD_TODOS_FAIL = '[Todos] Load Todos Fail';
export const LOAD_TODOS_SUCCESS = '[Todos] Load Todos Success';

export class LoadTodos implements Action {
  readonly type = LOAD_TODOS;
}

export class LoadTodosFail implements Action {
  readonly type = LOAD_TODOS_FAIL;
  constructor(public payload: any) {}
}

export class LoadTodosSuccess implements Action {
  readonly type = LOAD_TODOS_SUCCESS;
  constructor(public payload: Todo[]) {}
}

// create Todo
export const CREATE_TODO = '[Todos] Create Todo';
export const CREATE_TODO_SUCCESS = '[Todos] Create Todo Success';
export const CREATE_TODO_FAIL = '[Todos] Create Todo Fail';

export class CreateTodo implements Action {
  readonly type = CREATE_TODO;
  constructor(public payload: Todo) {}
}

export class CreateTodoSuccess implements Action {
  readonly type = CREATE_TODO_SUCCESS;
  constructor(public payload: Todo) {}
}

export class CreateTodoFail implements Action {
  readonly type = CREATE_TODO_FAIL;
  constructor(public payload: any) {}
}

// update todo
export const UPDATE_TODO = '[Todo] Update Todo';
export const UPDATE_TODO_SUCCESS = '[Todo] Update Todo Success';
export const UPDATE_TODO_FAIL = '[Todo] Update Todo Fail';

export class UpdateTodo implements Action {
  readonly type = UPDATE_TODO;
  constructor(public payload: Todo) {}
}

export class UpdateTodoSuccess implements Action {
  readonly type = UPDATE_TODO_SUCCESS;
  constructor(public payload: Todo) {}
}

export class UpdateTodoFail implements Action {
  readonly type = UPDATE_TODO_FAIL;
  constructor(public payload: any) {}
}

// update todo
export const REMOVE_TODO = '[Todo] Remove Todo';
export const REMOVE_TODO_SUCCESS = '[Todo] Remove Todo Success';
export const REMOVE_TODO_FAIL = '[Todo] Remove Todo Fail';

export class RemoveTodo implements Action {
  readonly type = REMOVE_TODO;
  constructor(public payload: Todo) {}
}

export class RemoveTodoSuccess implements Action {
  readonly type = REMOVE_TODO_SUCCESS;
  constructor(public payload: Todo) {}
}

export class RemoveTodoFail implements Action {
  readonly type = REMOVE_TODO_FAIL;
  constructor(public payload: any) {}
}

// action types
export type TodosActions =
  | LoadTodos
  | LoadTodosFail
  | LoadTodosSuccess
  | CreateTodo
  | CreateTodoSuccess
  | CreateTodoFail
  | UpdateTodo
  | UpdateTodoSuccess
  | UpdateTodoFail
  | RemoveTodo
  | RemoveTodoSuccess
  | RemoveTodoFail;
