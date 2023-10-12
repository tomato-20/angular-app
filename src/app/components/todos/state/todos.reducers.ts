import {createReducer, on} from '@ngrx/store'
import { Todo } from '../models/todos.model'
import * as TodosActions from './todos.actions'

const initialState : ReadonlyArray<Todo>= [] 

// export const TodosReducers = createReducer(
// initialState,
// on(TodosActions.GetTodos,((state,{todos})=>todos))
// )