import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollManagementPage } from './payroll-management-page';

describe('PayrollManagementPage', () => {
  let component: PayrollManagementPage;
  let fixture: ComponentFixture<PayrollManagementPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayrollManagementPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PayrollManagementPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
