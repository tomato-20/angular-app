import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import {Store} from '@ngrx/store'
import * as counterActions from './store/counter.actions'

@Component({
  selector: 'app-ngrx-counter',
  templateUrl: './ngrx-counter.component.html',
  styleUrls: ['./ngrx-counter.component.scss']
})
export class NgrxCounterComponent {
  count$ : Observable<number>;


  constructor(private store: Store<{count:number}>){
    this.count$ = store.select('count')
  }

  increment(): void{
    this.store.dispatch(counterActions.increment())
  }

  decrement():  void{
    this.store.dispatch(counterActions.decrement())
  }

  reset():  void{
    this.store.dispatch(counterActions.reset())
  }

}
