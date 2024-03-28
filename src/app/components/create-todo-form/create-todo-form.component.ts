import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TodoStateEnum } from 'src/app/enums/todo-state-enum.enum';
import { DropDownOption } from 'src/app/models/dropdownOption.model';
import { addTodo } from 'src/app/store/todo.actions';

@Component({
  selector: 'app-create-todo-form',
  templateUrl: './create-todo-form.component.html',
  styleUrls: ['./create-todo-form.component.scss']
})
export class CreateTodoFormComponent implements OnInit {
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
      id: [String(Date.now()), Validators.required],
      context: ['', Validators.required],
      state: [this.defaultState?.value, Validators.required]
    })
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const newTodo = this.formGroup.value
      console.log('new todo---', newTodo)
      this.store.dispatch(addTodo(newTodo))
      this.formGroup.reset()
    }
  }
}
