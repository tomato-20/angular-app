import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleCounterComponent } from './components/simple-counter/simple-counter.component';
import { NgrxCounterComponent } from './components/ngrx-counter/ngrx-counter.component';
import { CounterComponent } from './counter.component';

@NgModule({
  declarations: [SimpleCounterComponent, NgrxCounterComponent, CounterComponent],
  imports: [
    CommonModule
  ]
})
export class CounterModule { }
