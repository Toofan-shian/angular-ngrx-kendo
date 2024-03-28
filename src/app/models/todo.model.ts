import { TodoStateEnum } from "../enums/todo-state-enum.enum";

export interface Todo {
    id: number,
    context: string,
    state: TodoStateEnum
}