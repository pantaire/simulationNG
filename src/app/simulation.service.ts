import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Simulation } from '../models/simulation';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

    //instantiate simulationInput after submitting

  

    simulationUrl:string = 'localhost:8080/simulation';
    simulation:Simulation;

    constructor(private http:HttpClient) { }
    
    //liest Input aus Formular aus
    getSimulation() {
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
        return this.http.get<Simulation>(this.simulationUrl);
    }

    // Kommunikation zu Backend, Bereitstellen der Simulationseingabe
    /* httpPostSimulation(simulation:Simulation):Observable<Simulation> {
        return this.http.post(this.simulationUrl, simulation, httpOptions);
    } */

}
