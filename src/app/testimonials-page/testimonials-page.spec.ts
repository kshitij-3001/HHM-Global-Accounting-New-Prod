import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsPage } from './testimonials-page';

describe('TestimonialsPage', () => {
  let component: TestimonialsPage;
  let fixture: ComponentFixture<TestimonialsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(TestimonialsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
