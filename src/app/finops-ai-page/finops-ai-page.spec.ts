import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinopsAiPage } from './finops-ai-page';

describe('FinopsAiPage', () => {
  let component: FinopsAiPage;
  let fixture: ComponentFixture<FinopsAiPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinopsAiPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FinopsAiPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
