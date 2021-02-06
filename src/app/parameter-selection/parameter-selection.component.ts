import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SimulationService } from '../simulation.service';
import { Simulation } from '../../models/simulation';

@Component({
  selector: 'app-parameter-selection',
  templateUrl: './parameter-selection.component.html',
  styleUrls: ['./parameter-selection.component.css']
})

export class ParameterSelectionComponent {

  @Input() simulationInput:Simulation;

  //Festlegen von Defaultwerten für schnelle Simulation / falls unvollständige Daten vorliegen
  simulation:Simulation =  {
      rundenanzahl: 1000,
      eventWahrscheinlichkeit: 0.005,
      lieferantenanzahl: 30,
      kundenanzahl: 300,
      produktionsunternehmenanzahl: 3,
      startKapitalKMin: 100,
      startKapitalKMax: 300,
      startKapitalPUMin: 10000,
      startKapitalPUMax: 40000,
      startKapitalLMin: 1000,
      startKapitalLMax: 4000,
      produktionsmengePUMin: 9,
      produktionsmengePUMax: 20,
      produktionsmengeLMin: 10,
      produktionsmengeLMax: 30,
      lagerLMin: 100,
      lagerLMax: 200,
      lagerPUMin: 30,
      lagerPUMax: 90 
  }; 
  
  //constructor(simulationService:SimulationService, router:Router) {
  constructor(private http: HttpClient, private simulationService:SimulationService) { 
  }

    //sends input to Backend
    onSubmit(simulationInput) {
        console.log(simulationInput);
        console.log(this.simulation);
        //replaces undefined values with hard-coded default values
        /* if(simulationInput.rundenanzahl === undefined){
            simulationInput.rundenanzahl = this.simulation.rundenanzahl;
        }
        if(simulationInput.eventWahrscheinlichkeit === undefined){
            simulationInput.eventWahrscheinlichkeit = this.simulation.eventWahrscheinlichkeit;
        }
        if(simulationInput.lieferantenanzahl === undefined){
            simulationInput.lieferantenanzahl = this.simulation.lieferantenanzahl;
        }
        if(simulationInput.produktionsunternehmenanzahl === undefined){
            simulationInput.produktionsunternehmenanzahl = this.simulation.produktionsunternehmenanzahl;
        }
        if(simulationInput.kundenanzahl === undefined){
            simulationInput.kundenanzahl = this.simulation.kundenanzahl;
        }
        if(simulationInput.startKapitalKMin === undefined){
            simulationInput.startKapitalKMin = this.simulation.startKapitalKMin;
        }
        if(simulationInput.startKapitalKMax === undefined){
            simulationInput.startKapitalKMax = this.simulation.startKapitalKMin;
        }
        if(simulationInput.startKapitalLMin === undefined){
            simulationInput.startKapitalLMin = this.simulation.startKapitalLMin;
        }
        if(simulationInput.startKapitalLMax === undefined){
            simulationInput.startKapitalLMax = this.simulation.startKapitalLMax;
        }
        if(simulationInput.startKapitalPUMin === undefined){
            simulationInput.startKapitalPUMin = this.simulation.startKapitalPUMin;
        }
        if(simulationInput.startKapitalPUMax === undefined){
            simulationInput.startKapitalPUMax = this.simulation.startKapitalPUMax;
        }
        if(simulationInput.produktionsmengePUMin === undefined){
            simulationInput.produktionsmengePUMin = this.simulation.produktionsmengePUMin;
        }
        if(simulationInput.produktionsmengePUMax === undefined){
            simulationInput.produktionsmengePUMax = this.simulation.produktionsmengePUMax;
        }
        if(simulationInput.produktionsmengeLMin === undefined){
            simulationInput.produktionsmengeLMin = this.simulation.produktionsmengeLMin;
        }
        if(simulationInput.produktionsmengeLMax === undefined){
            simulationInput.produktionsmengeLMax = this.simulation.produktionsmengeLMax;
        }
        if(simulationInput.lagerLMin === undefined){
            simulationInput.lagerLMin = this.simulation.lagerLMin;
        }
        if(simulationInput.lagerLMax === undefined){
            simulationInput.lagerLMax = this.simulation.lagerLMax;
        }
        if(simulationInput.lagerPUMin === undefined){
            simulationInput.lagerPUMin = this.simulation.lagerPUMin;
        }
        if(simulationInput.lagerPUMax === undefined){
            simulationInput.lagerPUMax = this.simulation.lagerPUMax;
        } */  

        //POST Request, passes Input to simulation.service.ts
        this.simulationService.httpPostSimulation(this.simulation);    
    }
}