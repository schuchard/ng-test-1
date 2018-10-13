import * as todosActions from '@todos/store/actions/todos.actions';
import { Todo } from '@todos/models/todo';

export interface TodosState {
  todos: Todo[];
}

export const initialState: TodosState = {
  todos: []
};

export function todosReducer(
  state = initialState,
  action: todosActions.TodosActions
): TodosState {
  switch (action.type) {
    case todosActions.LOAD_TODOS: {
      return {
        ...state
      };
    }

    case todosActions.LOAD_TODOS_SUCCESS: {
      const todos = action.payload;

      return {
        ...state,
        todos
      };
    }

    case todosActions.LOAD_TODOS_FAIL: {
      return {
        ...state
      };
    }

    case todosActions.CREATE_TODO_SUCCESS: {
      const todos = [...state.todos, action.payload];

      return {
        ...state,
        todos
      };
    }

    case todosActions.UPDATE_TODO_SUCCESS: {
      const updatedTodo = action.payload;
      const todos = state.todos.filter(todo => todo.id !== updatedTodo.id);

      return {
        ...state,
        todos: [...todos, updatedTodo].sort((a, b) => a.id - b.id)
      };
    }

    case todosActions.REMOVE_TODO_SUCCESS: {
      const removedTodo = action.payload;
      const todos = state.todos.filter(todo => todo.id !== removedTodo.id);

      return {
        ...state,
        todos
      };
    }
  }

  return state;
}

export const getTodos = (state: TodosState) => state.todos;
