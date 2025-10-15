import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapyServicesComponent } from './therapy-services.component';

describe('TherapyServicesComponent', () => {
  let component: TherapyServicesComponent;
  let fixture: ComponentFixture<TherapyServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TherapyServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TherapyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
