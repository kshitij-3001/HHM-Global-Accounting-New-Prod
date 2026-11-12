import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxationPage } from './taxation-page';

describe('TaxationPage', () => {
  let component: TaxationPage;
  let fixture: ComponentFixture<TaxationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxationPage],
    }).compileComponents();

    fixture = TestBed.createComponent(TaxationPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
