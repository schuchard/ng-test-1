import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as todoReducers from '@todos/store/reducers/todos.reducers';

export const getTodosState = createFeatureSelector<todoReducers.TodosState>(
  'todos'
);

export const getAllTodos = createSelector(getTodosState, todoReducers.getTodos);
