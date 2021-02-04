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
  // TODO: check if value !undefined
  onSubmit(simulationInput) {
      console.log(this.simulation);
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
        console.log(this.simulation);
    
    //Input validation
    if (this.validateInput(simulationInput)) {
        //POST Request, passes Input to simulation.service
        this.simulationService.httpPostSimulation(this.simulation);    
    }
  }
}