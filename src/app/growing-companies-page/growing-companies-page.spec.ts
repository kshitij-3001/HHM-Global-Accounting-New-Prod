import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowingCompaniesPage } from './growing-companies-page';

describe('GrowingCompaniesPage', () => {
  let component: GrowingCompaniesPage;
  let fixture: ComponentFixture<GrowingCompaniesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrowingCompaniesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(GrowingCompaniesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
