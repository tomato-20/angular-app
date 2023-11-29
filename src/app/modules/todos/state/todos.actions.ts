import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todos.model';

const enum TodosActionsEnum {
  get = '[Todo Component] Get Todos',
  add = '[Todo Component] Add todo',
  remove = '[Todo Component] Remove todo',
}

export const GetTodos = createAction(
  TodosActionsEnum.get,
  props<{ todos: ReadonlyArray<Todo> }>
);

export const addTodo = createAction(
    TodosActionsEnum.add,
    props<{todo: Todo}>
) 

export const removeTodo = createAction(
    TodosActionsEnum.remove,
    props<{todo: Todo}>   
)