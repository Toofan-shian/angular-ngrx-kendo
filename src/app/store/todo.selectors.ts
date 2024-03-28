import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState } from "../models/todo.state";
import { Todo } from "../models/todo.model";
import { TodoStateEnum } from "../enums/todo-state-enum.enum";

export const selectTodoState = createFeatureSelector<TodoState>('todos')

export const selectTodos = createSelector(
    selectTodoState,
    (state: TodoState) => state.todos
)

export const selectLoading = createSelector(
    selectTodoState,
    (state: TodoState) => state.loading
)


export const selectInProgressTodos = createSelector(
    selectTodos,
    (todos: Todo[]) => todos.filter(todo => todo.state == TodoStateEnum.InProgress)
)


export const selectPendingTodos = createSelector(
    selectTodos,
    (todos: Todo[]) => todos.filter(todo => todo.state == TodoStateEnum.Pending)
)


export const selectDoneTodos = createSelector(
    selectTodos,
    (todos: Todo[]) => todos.filter(todo => todo.state == TodoStateEnum.Done)
)