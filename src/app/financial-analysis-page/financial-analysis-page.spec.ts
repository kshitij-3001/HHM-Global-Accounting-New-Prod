import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialAnalysisPage } from './financial-analysis-page';

describe('FinancialAnalysisPage', () => {
  let component: FinancialAnalysisPage;
  let fixture: ComponentFixture<FinancialAnalysisPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialAnalysisPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FinancialAnalysisPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
