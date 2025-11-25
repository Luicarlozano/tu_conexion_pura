import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselTestimonialComponent } from './carrusel-testimonial.component';

describe('CarruselTestimonialComponent', () => {
  let component: CarruselTestimonialComponent;
  let fixture: ComponentFixture<CarruselTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselTestimonialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarruselTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
