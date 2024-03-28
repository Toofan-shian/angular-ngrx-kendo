import { createAction, props } from "@ngrx/store";
import { Todo } from "../models/todo.model";


export const loadTodos = createAction(
    '[Todo] Load Todos',
)
export const todosLoaded = createAction(
    '[Todo] Todos Loaded',
    props<{todos: Todo[]}>()
)

export const updateTodo = createAction(
  '[Todo] Update Todo',
  props<{ todo: Todo }>()
);

export const updateTodoSuccess = createAction(
  '[Todo] Update Todo Success',
  props<{ updatedTodo: Todo }>()
);

export const deleteTodo = createAction(
    '[Todo] Delete Todo',
    props < { id: number }>()
)

export const deleteTodoSuccess = createAction(
    '[Todo] Delete Todo Success',
    props < { id: number }>()
)

export const addTodo = createAction(
    '[Todo] Add Todo',
    props <Todo>()
)
export const addTodoSuccess = createAction(
    '[Todo] Add Todo Success',
    props <Todo>()
)

export const removeTodo = createAction(
  '[Todo] Remove Todo',
  props<{ id: number }>()
);