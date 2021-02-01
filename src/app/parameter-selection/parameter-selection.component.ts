import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { SimulationService } from '../simulation.service';
import { Simulation } from '../../models/simulation';

@Component({
  selector: 'app-parameter-selection',
  templateUrl: './parameter-selection.component.html',
  styleUrls: ['./parameter-selection.component.css']
})

export class ParameterSelectionComponent implements OnInit {

  @Input() simulationInput:Simulation;

  simulation:Simulation;
  
  //constructor(simulationService:SimulationService, router:Router) {
  constructor(private http: HttpClient, private router:Router, private simulationService:SimulationService) { 
  }

  ngOnInit() {}
  validateInput(simulationInput):boolean {
      return true;
  }

  //sends input to Backend
  onSubmit(simulationInput) {
        this.simulation =  {
            rundenanzahl: simulationInput.rundenanzahl,
            eventWahrscheinlichkeit: simulationInput.eventWahrscheinlichkeit,
            lieferantenanzahl: simulationInput.lieferantenanzahl,
            kundenanzahl: simulationInput.kundenanzahl,
            produktionsunternehmenanzahl: simulationInput.produktionsunternehmenanzahl,
            startKapitalKMin: simulationInput.startKapitalKMin,
            startKapitalKMax: simulationInput.startKapitalKMax,
            startKapitalPUMin: simulationInput.startKapitalPUMin,
            startKapitalPUMax: simulationInput.startKapitalPUMax,
            startKapitalLMin: simulationInput.startKapitalLMin,
            startKapitalLMax: simulationInput.startKapitalLMax,
            produktionsmengePUMin: simulationInput.produktionsmengePUMin,
            produktionsmengePUMax: simulationInput.produktionsmengePUMax,
            produktionsmengeLMin: simulationInput.produktionsmengeLMin,
            produktionsmengeLMax: simulationInput.produktionsmengeLMax,
            lagerLMin: simulationInput.lagerLMin,
            lagerLMax: simulationInput.lagerLMax,
            lagerPUMin: simulationInput.lagerPUMin,
            lagerPUMax: simulationInput.lagerPUMax  
        }; 
    
    this.simulationService.httpPostSimulation(this.simulation);
    if (this.validateInput(simulationInput)) {
        this.router.navigate(['/dashboard']);
    }
  }
}