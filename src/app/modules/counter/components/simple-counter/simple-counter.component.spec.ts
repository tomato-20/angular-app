import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SimpleCounterComponent } from './simple-counter.component';
import { first } from 'rxjs';

describe('SimpleCounterComponent', () => {
  let component: SimpleCounterComponent;
  let fixture: ComponentFixture<SimpleCounterComponent>;
  let counterDe: DebugElement;
  let spanCountEl: HTMLElement;
  let changeCountSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleCounterComponent],
    });

    fixture = TestBed.createComponent(SimpleCounterComponent);
    component = fixture.componentInstance;
    counterDe = fixture.debugElement;
    spanCountEl = counterDe.nativeElement.querySelector('span.count')!;
    component.count = 0;
    fixture.detectChanges();

    changeCountSpy = spyOn(component.changeCount, 'emit');
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should render initial count', () => {
    expect(spanCountEl.textContent).toEqual(component.count.toString());
  });

  it('should increament count when add button is clicked', () => {
    let addBtnDe = counterDe.query(By.css('.inc-btn'));
    addBtnDe.triggerEventHandler('click');

    expect(changeCountSpy).toHaveBeenCalledOnceWith(1);

    // component.changeCount.pipe(first()).subscribe(v => {
    //   expect(v).toEqual(1)
    // })

    // component.increment()

  });

  it('should decrement count when subtract button is clicked', () => {
    let decBtnDe = counterDe.query(By.css('.dec-btn'));
    decBtnDe.triggerEventHandler('click');

    expect(changeCountSpy).toHaveBeenCalledOnceWith(-1);
  });

  it('should reset count when reset button is clicked', () => {
    component.count = 3;
    fixture.detectChanges();

    let resetBtn = counterDe.query(By.css('.reset-btn'));
    resetBtn.triggerEventHandler('click');
    expect(changeCountSpy).toHaveBeenCalledOnceWith(0);
  });
});
