import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidSizeAccountingTaxFirmPage } from './mid-size-accounting-tax-firm-page';

describe('MidSizeAccountingTaxFirmPage', () => {
  let component: MidSizeAccountingTaxFirmPage;
  let fixture: ComponentFixture<MidSizeAccountingTaxFirmPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MidSizeAccountingTaxFirmPage],
    }).compileComponents();

    fixture = TestBed.createComponent(MidSizeAccountingTaxFirmPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
