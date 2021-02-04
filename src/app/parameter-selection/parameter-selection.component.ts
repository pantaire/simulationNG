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

  simulation:Simulation =  {
      rundenanzahl: 1000,
      eventWahrscheinlichkeit: 0.5,
      lieferantenanzahl: 200,
      kundenanzahl: 300,
      produktionsunternehmenanzahl: 50,
      startKapitalKMin: 10,
      startKapitalKMax: 2000,
      startKapitalPUMin: 100,
      startKapitalPUMax: 10000,
      startKapitalLMin: 50,
      startKapitalLMax: 8000,
      produktionsmengePUMin: 1,
      produktionsmengePUMax: 100,
      produktionsmengeLMin: 1,
      produktionsmengeLMax: 200,
      lagerLMin: 1,
      lagerLMax: 1000,
      lagerPUMin: 1,
      lagerPUMax: 2000 
  }; 
  
  //constructor(simulationService:SimulationService, router:Router) {
  constructor(private http: HttpClient, private simulationService:SimulationService) { 
  }

  validateInput(simulationInput):boolean {
      return true;
    }


  //sends input to Backend
  onSubmit(simulationInput) {
    console.log(simulationInput);
    console.log(this.simulation);
    //replaces undefined values with hard-coded default values
    // TODO: replace with for each (does not seem possible?!)
    if(simulationInput.rundenanzahl === undefined){
        simulationInput = this.simulation.rundenanzahl;
    }
    if(simulationInput.eventWahrscheinlichkeit === undefined){
        simulationInput.eventWahrscheinlichkeit = this.simulation.eventWahrscheinlichkeit;
    }
    if(simulationInput.lieferantenanzahl === undefined){
        simulationInput.lieferantenanzahl = this.simulation.lieferantenanzahl;
    }
    if(simulationInput.produktionsunternehmenanzahl === !undefined){
        simulationInput.produktionsunternehmenanzahl = this.simulation.produktionsunternehmenanzahl;
    }
    if(simulationInput.kundenanzahl === !undefined){
        simulationInput.kundenanzahl = this.simulation.kundenanzahl;
    }
    if(simulationInput.startKapitalKMin === !undefined){
        simulationInput.startKapitalKMin = this.simulation.startKapitalKMin;
    }
    if(simulationInput.startKapitalKMax === !undefined){
        simulationInput.startKapitalKMax = this.simulation.startKapitalKMin;
    }
    if(simulationInput.startKapitalLMin === !undefined){
        simulationInput.startKapitalLMin = this.simulation.startKapitalLMin;
    }
    if(simulationInput.startKapitalLMax === !undefined){
        simulationInput.startKapitalLMax = this.simulation.startKapitalLMax;
    }
    if(simulationInput.startKapitalPUMin === !undefined){
        simulationInput.startKapitalPUMin = this.simulation.startKapitalPUMin;
    }
    if(simulationInput.startKapitalPUMax === !undefined){
        simulationInput.startKapitalPUMax = this.simulation.startKapitalPUMax;
    }
    if(simulationInput.produktionsmengePUMin === !undefined){
        simulationInput.produktionsmengePUMin = this.simulation.produktionsmengePUMin;
    }
    if(simulationInput.produktionsmengePUMax === !undefined){
        simulationInput.produktionsmengePUMax = this.simulation.produktionsmengePUMax;
    }
    if(simulationInput.produktionsmengeLMin === !undefined){
        simulationInput.produktionsmengeLMin = this.simulation.produktionsmengeLMin;
    }
    if(simulationInput.produktionsmengeLMax === !undefined){
        simulationInput.produktionsmengeLMax = this.simulation.produktionsmengeLMax;
    }
    if(simulationInput.lagerLMin === !undefined){
        simulationInput.lagerLMin = this.simulation.lagerLMin;
    }
    if(simulationInput.lagerLMax === !undefined){
        simulationInput.lagerLMax = this.simulation.lagerLMax;
    }
    if(simulationInput.lagerPUMin === !undefined){
        simulationInput.lagerPUMin = this.simulation.lagerPUMin;
    }
    if(simulationInput.lagerPUMax === !undefined){
        simulationInput.lagerPUMax = this.simulation.lagerPUMax;
    }
        console.log(this.simulation);
    
    //Input validation
    if (this.validateInput(simulationInput)) {
        //POST Request, passes Input to simulation.service.ts
        this.simulationService.httpPostSimulation(this.simulation);    
    }
  }
}