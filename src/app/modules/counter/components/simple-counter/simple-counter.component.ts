import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-simple-counter',
  templateUrl: './simple-counter.component.html',
  styleUrls: ['./simple-counter.component.scss'],
})
export class SimpleCounterComponent {
  @Input() count: number = 0;
  @Output() changeCount = new EventEmitter<number>();

  increment(): void {
    // this.count++;
    this.changeCount.emit(this.count + 1);
  }

  decrement(): void {
    //  this.count--;
    this.changeCount.emit(this.count - 1);
  }

  reset(): void {
    // this.count = 0;
    this.changeCount.emit(0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      );
  }

  //  triggers when changehandler from parent component is called ie (onChange in counter.component)
  // ngOnChanges(changes: SimpleChanges) {
  //   this.count = changes['count'].currentValue;
  // }
}
