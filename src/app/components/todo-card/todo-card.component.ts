import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoStateEnum } from 'src/app/enums/todo-state-enum.enum';
import { DropDownOption } from 'src/app/models/dropdownOption.model';
import { Todo } from 'src/app/models/todo.model';
import { updateTodo, deleteTodo } from 'src/app/store/todo.actions';
import { pencilIcon, xIcon, SVGIcon } from '@progress/kendo-svg-icons';


@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {

  public pencilIcon: SVGIcon = pencilIcon
  public xIcon: SVGIcon = xIcon

  @Input() todo!: Todo; 
  @Output() editTodo = new EventEmitter<Todo>()

  stateOptions = Object.keys(TodoStateEnum).map(key => ({
    value: TodoStateEnum[key as keyof typeof TodoStateEnum],
    text: key
  }));

  selectedState!: DropDownOption
  
  constructor(private store: Store) { }
  
  ngOnInit(): void {
    this.selectedState = this.stateOptions.find(option => {
        return option.value == this.todo.state
      }) as DropDownOption
  }

  onEditClick() {
    this.editTodo.emit(this.todo)
  }

  onCloseClick() {
    // Implement your close logic here
    this.store.dispatch(deleteTodo({id: this.todo.id}))
  }

  onStateChange(newState: DropDownOption) {
    const updatedTodo: Todo = { ...this.todo, state: newState.value }
    setTimeout(() => {
      this.store.dispatch(updateTodo({todo: updatedTodo}))
    }, 250)
  }
}