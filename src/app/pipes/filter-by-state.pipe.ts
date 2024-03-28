import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodoStateEnum } from '../enums/todo-state-enum.enum';

@Pipe({
  name: 'filterByState'
})
export class FilterByStatePipe implements PipeTransform {

  transform(todos: Todo[], state: TodoStateEnum): Todo[] {
    return todos.filter(todo => todo.state === state);
  }

}
