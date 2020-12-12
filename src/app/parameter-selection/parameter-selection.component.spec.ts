import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterSelectionComponent } from './parameter-selection.component';

describe('ParameterSelectionComponent', () => {
  let component: ParameterSelectionComponent;
  let fixture: ComponentFixture<ParameterSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParameterSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
