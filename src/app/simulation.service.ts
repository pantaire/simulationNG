import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Simulation } from '../models/simulation';

@Injectable({
  providedIn: 'root'
})

export class SimulationService {
    
    constructor(private http:HttpClient) { }
  
    headers = new HttpHeaders().set('content-type', 'application/json');
    simulationAPI:string = 'http://localhost:8080/simulation';
    simulation:Simulation;

    
    //liest Input aus Formular aus, derzeit noch in onSubmit()
    getSimulation(simulation) {
        return this.simulation =  {
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
        }
    }
    
    // Kommunikation zu Backend, Anfragen der Simulationsdaten
    httpGetSimulation():Observable<Simulation> {
        return this.http.get<Simulation>(this.simulationAPI);
    }

    // Kommunikation zu Backend, Bereitstellen der Simulationseingabe
     httpPostSimulation(simulation:Simulation) {
        return this.http.post(this.simulationAPI, JSON.stringify(simulation));
    } 

}
