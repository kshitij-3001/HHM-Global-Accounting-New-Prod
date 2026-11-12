import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesPage } from './industries-page';

describe('IndustriesPage', () => {
  let component: IndustriesPage;
  let fixture: ComponentFixture<IndustriesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustriesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(IndustriesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
