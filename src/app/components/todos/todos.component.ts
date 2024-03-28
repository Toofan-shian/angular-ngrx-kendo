import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { loadTodos } from 'src/app/store/todo.actions';
import { selectDoneTodos, selectInProgressTodos, selectLoading, selectPendingTodos, selectTodos } from 'src/app/store/todo.selectors';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  pendingTodos$!: Observable<Todo[]>;
  inProgressTodos$!: Observable<Todo[]>;
  doneTodos$!: Observable<Todo[]>;
  loading$!: Observable<boolean>;

  dialogOpened: boolean = false
  todoToEdit!: Todo

  constructor(
    private store: Store
  ) { }
  
  ngOnInit(): void {
    this.store.dispatch(loadTodos())

    this.pendingTodos$ = this.store.select(selectPendingTodos)
    this.inProgressTodos$ = this.store.select(selectInProgressTodos)
    this.doneTodos$ = this.store.select(selectDoneTodos)
    this.loading$ = this.store.select(selectLoading)
  }

  onEditTodo(todo: Todo) {
    this.dialogOpened = true
    this.todoToEdit = todo
  }

  closeDialog(): void {

    this.dialogOpened = false
    console.log(this.dialogOpened, 'changes')
  }
}
