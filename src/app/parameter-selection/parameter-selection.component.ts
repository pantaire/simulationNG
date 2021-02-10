import { Component, Input, OnInit } from '@angular/core';
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
    inputError:string;

    ngOnInit(): void {

        //Festlegen von Defaultwerten für schnelle Simulation / falls unvollständige Daten vorliegen
        this.simulation =  {
            rundenanzahl: 200,
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
    }
  
    //constructor(simulationService:SimulationService, router:Router) {
    constructor(private simulationService:SimulationService) { 
    }


    //schnelle Simulation mit Defaultwerten, keine Daten müssen eigegeben werden
    fastSim() {
        this.simulationService.httpPostSimulation(this.simulation); 
        console.log(this.simulation); 
    }

    //sends input to Backend
    onSubmit(simulationInput) {
        console.log(this.simulation)
        console.log(this.simulationInput)
        console.log(simulationInput)
        this.simulation.rundenanzahl = simulationInput.rundenanzahl;
        this.simulation.eventWahrscheinlichkeit = simulationInput.eventWahrscheinlichkeit;
        this.simulation.lieferantenanzahl = simulationInput.lieferantenanzahl;
        this.simulation.produktionsunternehmenanzahl = simulationInput.produktionsunternehmenanzahl;
        this.simulation.kundenanzahl = simulationInput.kundenanzahl;
        this.simulation.startKapitalKMin = simulationInput.startKapitalKMin;
        this.simulation.startKapitalKMax = simulationInput.startKapitalKMin;
        this.simulation.startKapitalLMin = simulationInput.startKapitalLMin;
        this.simulation.startKapitalLMax = simulationInput.startKapitalLMax;
        this.simulation.startKapitalPUMin = simulationInput.startKapitalPUMin;
        this.simulation.startKapitalPUMax = simulationInput.startKapitalPUMax;
        this.simulation.produktionsmengePUMin = simulationInput.produktionsmengePUMin;
        this.simulation.produktionsmengePUMax = simulationInput.produktionsmengePUMax;
        this.simulation.produktionsmengeLMin = simulationInput.produktionsmengeLMin;
        this.simulation.produktionsmengeLMax = simulationInput.produktionsmengeLMax;
        this.simulation.lagerLMin = simulationInput.lagerLMin;
        this.simulation.lagerLMax = simulationInput.lagerLMax;
        this.simulation.lagerPUMin = simulationInput.lagerPUMin;
        this.simulation.lagerPUMax = simulationInput.lagerPUMax;

        console.log(this.simulation)
        //check validation again before sending (must be: defined && number && <0 && min<max)
        if (simulationInput.rundenanzahl < 0 
            && simulationInput.lieferantenanzahl < 13
            && simulationInput.produktionsunternehmenanzahl < 0
            && simulationInput.kundenanzahl < 0
            && simulationInput.startKapitalLMax < 0
            && simulationInput.startKapitalLMin < 0
            && simulationInput.startKapitalPUMax < 0
            && simulationInput.startKapitalPUMin < 0
            && simulationInput.startKapitalKMax < 0
            && simulationInput.startKapitalKMin < 0
            && simulationInput.produktionsmengeLMax < 0
            && simulationInput.produktionsmengeLMin < 0
            && simulationInput.produktionsmengePUMax < 0
            && simulationInput.produktionsmengePUMin < 0
            && simulationInput.lagerLMax < 0
            && simulationInput.lagerLMin < 0
            && simulationInput.lagerPUMax < 0
            && simulationInput.lagerPUMin < 0
            && simulationInput.startKapitalLMin < simulationInput.startKapitalLMax
            && simulationInput.startKapitalPUMin < simulationInput.startKapitalPUMax
            && simulationInput.startKapitalKMin < simulationInput.startKapitalKMax
            && simulationInput.produktionsmengeLMin < simulationInput.produktionsmengeLMax
            && simulationInput.produktionsmengePUMax < simulationInput.produktionsmengePUMin
            && simulationInput.lagerLMin < simulationInput.lagerLMax
            && simulationInput.lagerPUMin < simulationInput.lagerPUMax)
        {
            // displays error message underneath submit button
            this.inputError = "Bitte erst alle Felder korrekt ausfüllen - oder schnelle Simulation ausprobieren"
        }
        else {
            //POST Request, passes Input to simulation.service.ts
            this.simulationService.httpPostSimulation(this.simulation);    
        }
    }
}