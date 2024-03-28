import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TodoStateEnum } from 'src/app/enums/todo-state-enum.enum';
import { DropDownOption } from 'src/app/models/dropdownOption.model';
import { Todo } from 'src/app/models/todo.model';
import { updateTodo } from 'src/app/store/todo.actions';

@Component({
  selector: 'app-edit-todo-form',
  templateUrl: './edit-todo-form.component.html',
  styleUrls: ['./edit-todo-form.component.scss']
})
export class EditTodoFormComponent {

  @Input() todo!: Todo
  @Output() todoUpdated = new EventEmitter<void>()

  formGroup!: FormGroup

  stateOptions: DropDownOption[] = Object.keys(TodoStateEnum).map(key => ({
    value: TodoStateEnum[key as keyof typeof TodoStateEnum],
    text: key
  }));

  defaultState = this.stateOptions.find(Option => Option.value == TodoStateEnum.Pending)

  constructor(
    private formBuilder: FormBuilder,
    private store: Store
  ) { }
  
  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      id: [this.todo.id, Validators.required],
      context: [this.todo.context, Validators.required],
      state: [this.todo.state, Validators.required]
    })
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const newTodo: Todo = this.formGroup.value
      console.log('new todo---', newTodo)
      this.store.dispatch(updateTodo({ todo: newTodo }))
      this.todoUpdated.emit()
      this.formGroup.reset()
    }
  }
}
