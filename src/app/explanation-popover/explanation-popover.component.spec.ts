import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanationPopoverComponent } from './explanation-popover.component';

describe('ExplanationPopoverComponent', () => {
  let component: ExplanationPopoverComponent;
  let fixture: ComponentFixture<ExplanationPopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplanationPopoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplanationPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
