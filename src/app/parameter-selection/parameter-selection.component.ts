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
  @Output() submitSimulation: EventEmitter = new EventEmitter();

  
  simulation:Simulation;
  //simulationService: any;
  private simulationAPI = 'localhost:8080/simulation';
  
  //constructor(simulationService:SimulationService, router:Router) { }
  constructor(private http: HttpClient, private router:Router, private simulationService:SimulationService) {
      
  }

  ngOnInit() {
    this.simulationService.httpPostSimulation(this.simulationInput).subscribe(() => {});
  }

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
    

   // Use when/if simulationService is implemented 
    console.log(this.simulation);
    console.log("simInput:" + simulationInput.value);
    this.simulationService.httpPostSimulation(this.simulation).subscribe(() => {});
    this.router.navigate(['/dashboard']);
  }
}