import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApArManagementPage } from './ap-ar-management-page';

describe('ApArManagementPage', () => {
  let component: ApArManagementPage;
  let fixture: ComponentFixture<ApArManagementPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApArManagementPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ApArManagementPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
