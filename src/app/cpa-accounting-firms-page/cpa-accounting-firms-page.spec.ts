import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpaAccountingFirmsPage } from './cpa-accounting-firms-page';

describe('CpaAccountingFirmsPage', () => {
  let component: CpaAccountingFirmsPage;
  let fixture: ComponentFixture<CpaAccountingFirmsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpaAccountingFirmsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CpaAccountingFirmsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
