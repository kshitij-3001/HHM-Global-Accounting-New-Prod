import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolePractitionersPage } from './sole-practitioners-page';

describe('SolePractitionersPage', () => {
  let component: SolePractitionersPage;
  let fixture: ComponentFixture<SolePractitionersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolePractitionersPage],
    }).compileComponents();

    fixture = TestBed.createComponent(SolePractitionersPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
