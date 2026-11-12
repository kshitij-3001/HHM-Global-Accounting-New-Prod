import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsPage } from './solutions-page';

describe('SolutionsPage', () => {
  let component: SolutionsPage;
  let fixture: ComponentFixture<SolutionsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolutionsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(SolutionsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
