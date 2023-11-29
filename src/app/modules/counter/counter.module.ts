import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleCounterComponent } from './components/simple-counter/simple-counter.component';
import { NgrxCounterComponent } from './components/ngrx-counter/ngrx-counter.component';
import { CounterComponent } from './counter.component';
import { StoreModule } from '@ngrx/store';
import { COUNTER_STATE, CounterReducer } from './components/ngrx-counter/store/counter.reducers';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [SimpleCounterComponent, NgrxCounterComponent, CounterComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(COUNTER_STATE, CounterReducer),
    EffectsModule.forFeature([])
  ]
})
export class CounterModule { }
