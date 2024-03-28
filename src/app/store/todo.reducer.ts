import { createReducer, on } from "@ngrx/store";
import { TodoState } from "../models/todo.state";
import * as TodoActions from "./todo.actions"

export const initialState: TodoState = {
    todos: [],
    loading: false
}


export const todoReducer = createReducer(
    initialState,
    on(TodoActions.loadTodos, (state) => ({ ...state, loading: true })),
    on(TodoActions.todosLoaded, (state, { todos }) => ({ ...state, todos, loading: false })),
    on(TodoActions.updateTodoSuccess, (state, { updatedTodo }) => ({
        ...state,
        todos: state.todos.map(todo =>
            todo.id === updatedTodo.id ? updatedTodo : todo
        )
    })),
    on(TodoActions.deleteTodoSuccess, (state, { id }) => ({
        ...state,
        todos: state.todos.filter(todo => todo.id !== id)
    })),
    on(TodoActions.addTodoSuccess, (state, todo) => ({
        ...state,
        todos: [...state.todos, todo]
    }))
    
)