import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TodoService } from "../services/todo.service";
import * as TodoActions from './todo.actions'
import { catchError, exhaustMap, map, mergeMap, of, switchMap } from "rxjs";


@Injectable()
export class TodoEffects {
    constructor(
        private actions$: Actions,
        private todoService: TodoService
    ) {}

    loadTodos$ = createEffect(() =>
        this.actions$.pipe(
        ofType(TodoActions.loadTodos),
        switchMap(() =>
            this.todoService.getAllTodos().pipe(
                map(todos => TodoActions.todosLoaded({ todos })),
                catchError(() => of({ type: 'Error loading todos' }))
            )
        )
        )
    );

    updateTodo$ = createEffect(() => this.actions$.pipe(
        ofType(TodoActions.updateTodo),
        mergeMap(action => 
            this.todoService.updateTodo(action.todo).pipe(
                map(updatedTodo => TodoActions.updateTodoSuccess({updatedTodo}))
            ))
    ))

    deleteTodo$ = createEffect(() => this.actions$.pipe(
        ofType(TodoActions.deleteTodo),
        exhaustMap((action) => 
            this.todoService.deleteTodo(action.id).pipe(
                map(() => TodoActions.deleteTodoSuccess({id: action.id}))
            ))
    ))

    addTodo$ = createEffect(() => this.actions$.pipe(
        ofType(TodoActions.addTodo),
        exhaustMap(todo => 
            this.todoService.addTodo(todo).pipe(
                map(newTodo => TodoActions.addTodoSuccess(newTodo))
            ))
    ))
}