import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Simulation } from '../../models/simulation';
import { SimulationService } from '../simulation.service';

@Component({
  selector: 'app-expert-mode',
  templateUrl: './expert-mode.component.html',
  styleUrls: ['./expert-mode.component.css']
})
export class ExpertModeComponent implements OnInit {

  simulation:Simulation;
  router:Router
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(simulationInput) {
  /* this.simulationService.getSimulation().subscribe(simulation => {
      this.simulation = simulation;
  }) */
  console.log(this.simulation);
  console.log(simulationInput);
  this.router.navigate(['dashboard']);
  }

  addLieferant() {}
  addUnternehmen() {}
  addKunde() {}
}
