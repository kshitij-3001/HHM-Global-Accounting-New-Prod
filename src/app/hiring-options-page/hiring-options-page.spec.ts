import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringOptionsPage } from './hiring-options-page';

describe('HiringOptionsPage', () => {
  let component: HiringOptionsPage;
  let fixture: ComponentFixture<HiringOptionsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiringOptionsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(HiringOptionsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
