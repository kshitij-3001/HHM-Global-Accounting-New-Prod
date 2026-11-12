import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingBookkeepingPage } from './accounting-bookkeeping-page';

describe('AccountingBookkeepingPage', () => {
  let component: AccountingBookkeepingPage;
  let fixture: ComponentFixture<AccountingBookkeepingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountingBookkeepingPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountingBookkeepingPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
