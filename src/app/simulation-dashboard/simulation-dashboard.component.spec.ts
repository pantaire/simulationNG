import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationDashboardComponent } from './simulation-dashboard.component';

describe('SimulationDashboardComponent', () => {
  let component: SimulationDashboardComponent;
  let fixture: ComponentFixture<SimulationDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
