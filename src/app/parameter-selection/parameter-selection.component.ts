import { Component, OnInit, Input, Output } from '@angular/core';
import { Simulation } from '../simulation';
import { SimulationService } from '../simulation.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-parameter-selection',
  templateUrl: './parameter-selection.component.html',
  styleUrls: ['./parameter-selection.component.css']
})

export class ParameterSelectionComponent implements OnInit {

  //@Input() simulationInput:Simulation;
  @Output() submitSimulation: EventEmitter = new EventEmitter();

  router:Router;
  simulation:Simulation;
    simulationService: any;
  //private simulationAPI = 'localhost:8080/simulation'; moved to service
  
  constructor(simulationService:SimulationService, router:Router) { }

  ngOnInit() {
    this.simulationService.getSimulation().subscribe()
  }

  onSubmit(simulationInput) {
      /*const simulation =  {
        rundenanzahl: this.simulationInput.rundenanzahl,
        eventWahrscheinlichkeit: this.simulation.eventWahrscheinlichkeit,
        lieferantenanzahl: this.simulation.lieferantenanzahl,
        kundenanzahl: this.simulation.kundenanzahl,
        produktionsunternehmenanzahl: this.simulation.produktionsunternehmenanzahl,
        startKapitalKMin: this.simulation.startKapitalKMax,
        startKapitalKMax: this.simulation.startKapitalKMax,
        startKapitalPUMin: this.simulation.startKapitalPUMin,
        startKapitalPUMax: this.simulation.startKapitalPUMax,
        startKapitalLMin: this.simulation.startKapitalLMin,
        startKapitalLMax: this.simulation.startKapitalLMax,
        produktionsmengePUMin: this.simulation.produktionsmengePUMin,
        produktionsmengePUMax: this.simulation.produktionsmengePUMax,
        produktionsmengeLMin: this.simulation.produktionsmengeLMin,
        produktionsmengeLMax: this.simulation.produktionsmengeLMax,
        lagerLMin: this.simulation.lagerLMin,
        lagerLMax: this.simulation.lagerLMax,
        lagerPUMin: this.simulation.lagerPUMin,
        lagerPUMax: this.simulation.lagerPUMax 
    }; */

    /* this.simulationService.getSimulation().subscribe(simulation => {
        this.simulation = simulation;
    }) */
    console.log(this.simulation);
    console.log(simulationInput);
    this.router.navigate(['dashboard']);
  }
}