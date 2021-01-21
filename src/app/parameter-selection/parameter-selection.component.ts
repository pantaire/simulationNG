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
      /* const simulation =  {
        rundenanzahl: this.simulation.rundenanzahl,
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
    }; 
    */

    /* Use when/if simulationService is implemented 
    this.simulationService.getSimulation().subscribe(simulation => {
        this.simulation = simulation;
    }) */
    console.log("simulation:" + this.simulation);
    console.log("simInput:" + simulationInput.value);
    this.simulationService.httpPostSimulation(this.simulationInput).subscribe(() => {});
    
    //will be obsolete when/if service is running
    /* this.http.post(this.simulationAPI, this.simulationInput).toPromise().then((data: any) => {
        console.log(data);
    }); */
    this.router.navigate(['/dashboard']);

    
  }
}