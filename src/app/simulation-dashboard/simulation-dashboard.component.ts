import { Component, OnInit, Input } from '@angular/core';
import { Simulation } from './simulation';

@Component({
  selector: 'app-simulation-dashboard',
  templateUrl: './simulation-dashboard.component.html',
  styleUrls: ['./simulation-dashboard.component.css']
})
export class SimulationDashboardComponent implements OnInit {

  constructor() { }

  @Input() simulation : Simulation;
  ngOnInit(): void {
  }

}
