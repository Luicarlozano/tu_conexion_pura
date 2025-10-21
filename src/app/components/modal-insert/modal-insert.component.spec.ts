import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInsertComponent } from './modal-insert.component';

describe('ModalInsertComponent', () => {
  let component: ModalInsertComponent;
  let fixture: ComponentFixture<ModalInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalInsertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
