import { Pipe, PipeTransform } from '@angular/core';
import { TodoStateEnum } from '../enums/todo-state-enum.enum';


@Pipe({ name: 'kendoGridStateBadge' })
export class KendoGridStateBadgePipe implements PipeTransform {
  transform(state: TodoStateEnum): string {
    let badgeClass: string;
    switch (state) {
      case TodoStateEnum.Pending:
        badgeClass = 'badge-warning';
        break;
      case TodoStateEnum.InProgress:
        badgeClass = 'badge-info';
        break;
      case TodoStateEnum.Done:
        badgeClass = 'badge-success';
        break;
    }
    return `<span class="badge ${badgeClass}">${state}</span>`;
  }
}