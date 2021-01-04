import { Component, OnInit, Input } from '@angular/core';
import { simulation } from '../mock-sim';

@Component({
  selector: 'app-simulation-dashboard',
  templateUrl: './simulation-dashboard.component.html',
  styleUrls: ['./simulation-dashboard.component.css']
})
export class SimulationDashboardComponent implements OnInit {

  constructor() { }

  @Input() simulation : typeof simulation;
  ngOnInit(): void {
  }

}
