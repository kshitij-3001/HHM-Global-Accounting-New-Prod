import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistsPage } from './checklists-page';

describe('ChecklistsPage', () => {
  let component: ChecklistsPage;
  let fixture: ComponentFixture<ChecklistsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecklistsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ChecklistsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
