import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { SimpleCounterComponent } from './components/simple-counter/simple-counter.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: '<div></div>',
  selector: 'app-ngrx-counter',
})
class NgrxCounterStubComponent {}

describe('CounterCompoent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let countChangeSpy: jasmine.Spy;

  let simpleCounterComponent: SimpleCounterComponent;
  let simpleCounterFixture: ComponentFixture<SimpleCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CounterComponent,
        SimpleCounterComponent,
        NgrxCounterStubComponent,
      ],
    });

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    // countChangeSpy = spyOn(component, 'onChange');

    // simpleCounterFixture = TestBed.createComponent(SimpleCounterComponent);
    // simpleCounterComponent = simpleCounterFixture.componentInstance;

    component.count = 0;
    // simpleCounterComponent.count = 0;
    fixture.detectChanges();
  });

  it('should creare', () => [expect(component).toBeTruthy()]);

  it('should set count when onChange() is called', ()=>{
    component.onChange(3)
    fixture.detectChanges()
    expect(component.count).toEqual(3)
  })

  // it('should set count correctly if changeCount is emited from SimpleCounterComponent by increment() method', async () => {
  //   let simpleCounter = fixture.debugElement.query(
  //     By.directive(SimpleCounterComponent)
  //   );
  //   simpleCounter.query(By.css('.inc-btn')).triggerEventHandler('click');
  //   expect(countChangeSpy).toHaveBeenCalledOnceWith(1);
  // });

  // it('should set count correctly if changeCount is emited from SimpleCounterComponent by decrement() method', async () => {
  //   let simpleCounter = fixture.debugElement.query(
  //     By.directive(SimpleCounterComponent)
  //   );
  //   simpleCounter.query(By.css('.dec-btn')).triggerEventHandler('click');
  //   expect(countChangeSpy).toHaveBeenCalledOnceWith(-1);
  // });

  // it('should set count correctly if changeCount is emited from SimpleCounterComponent by reset() method', async () => {
  //   component.count = 3;
  //   fixture.detectChanges();

  //   let simpleCounter = fixture.debugElement.query(
  //     By.directive(SimpleCounterComponent)
  //   );
  //   simpleCounter.query(By.css('.reset-btn')).triggerEventHandler('click');
  //   expect(countChangeSpy).toHaveBeenCalledOnceWith(0);
  // });
});
