import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionItemComponent } from './collection-item.component';
import {
  Component,
  DebugElement,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { mockCollectionItemArray } from 'src/mocks/mockDatas';
import { By } from '@angular/platform-browser';
import { first } from 'rxjs';

@Component({
  selector: 'app-modal',
  template: '<div></div>',
})
class FakeModalComponent {
  @Input() isOpen: boolean = true;
  @Output() onModalClose = new EventEmitter<void>();
}

describe('CollectionItemComponent', () => {
  let component: CollectionItemComponent;
  let fixture: ComponentFixture<CollectionItemComponent>;
  let collectionItemDe: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectionItemComponent, FakeModalComponent],
    });
    fixture = TestBed.createComponent(CollectionItemComponent);
    component = fixture.componentInstance;
    collectionItemDe = fixture.debugElement;

    component.book = mockCollectionItemArray[0];
    component.isOpen = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render book when book is set', () => {
    expect(
      collectionItemDe.query(By.css(`[data-test-id="collection-item"]`))
    ).toBeTruthy();
  });

  it('should set isOpen true on calling openModal() function', () => {
    component.openModal();
    expect(component.isOpen).toBeTrue();
  });

  it('should set isOpen false on calling closeModal() function', () => {
    component.isOpen = true;
    fixture.detectChanges();

    component.closeModal();
    expect(component.isOpen).toBeFalse();
  });

  describe('Change Book Status', () => {
    it('should emit and close modal  when onSaveChange method is called with different reading status', () => {
      component.changeBookStatus.pipe(first()).subscribe((updatedBook) => {
        expect(updatedBook).toEqual({ ...component.book, readingStatus: 2 });
      });
      component.onSaveChange('2');
    });

    it('should only close modal but emit when onSaveChange method is called with different reading status', () => {
      spyOn(component.changeBookStatus, 'emit');
      component.onSaveChange(component.book.readingStatus.toString());
      expect(component.changeBookStatus.emit).not.toHaveBeenCalled()
      expect(component.isOpen).toBeFalse();
    });
  });
  //   it("should open modal when 'change status ' button is clicked", () => {
  //     // let changeStatusBtnDe = collectionItemDe.query(By.css('[data-test-id="change-status-btn"]'))
  //     let changeStatusBtnDe = collectionItemDe.query(
  //       By.css('change-status-button')
  //     );
  //     changeStatusBtnDe.triggerEventHandler('click');

  //     fixture.detectChanges();
  //     expect(component.isOpen).toBeTrue();
  //   });

  //   it(`should trigger an remove event when "remove from collection" btn  is clicked`, () => {
  //     let removeBtnDe = collectionItemDe.query(By.css('remove-button'));
  //     component.remove.pipe(first()).subscribe((value) => {
  //       expect(value).toEqual(component.book.id);
  //     });
  //     removeBtnDe.triggerEventHandler('click');
  //   });

  //   it(`should trigger changeBookStatus event when "save" button is clicked`, () => {
  //     let changeSaveBtnDe = collectionItemDe.query(
  //       By.css(`[data-test-id="save-change-btn"]`)
  //     );

  //     let selectEl: HTMLSelectElement = changeSaveBtnDe.query(
  //       By.css(`[data-test-id="reading-status-select"]`)
  //     ).nativeElement;
  //     selectEl.value = selectEl.options[2].value;
  //     selectEl.dispatchEvent(new Event('change'));
  //     fixture.detectChanges();

  //     component.changeBookStatus.pipe(first()).subscribe((value) => {
  //       expect(value.id).toEqual(component.book.id);
  //       expect(value.readingStatus).toEqual(parseInt(selectEl.value));
  //     });
  //     changeSaveBtnDe.triggerEventHandler('click');
  //   });
});
