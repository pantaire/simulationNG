import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Simulation } from '../models/simulation';
import { ExpertSimulation } from 'src/models/expertsimulation';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class SimulationService {
    
    constructor(private http:HttpClient, private router:Router) { }
  
    headers = new HttpHeaders().set('content-type', 'application/json');
    simulationAPI:string = 'http://localhost:8080/simulation';
    simulation:Simulation;
    expertSim:ExpertSimulation;

    //used for response after http post request
    kundenStatistik;
    lieferantenStatistik;
    produzentenStatistik;

    // Kommunikation zu Backend, Bereitstellen der Simulationseingabe - Antwort liefert Simulation mit Daten für Statistik zurück
     httpPostSimulation(simulation:Simulation) {
        return this.http.post<any>(this.simulationAPI, simulation).subscribe(data => {
            this.kundenStatistik = data.rundenStatistikKunden;
            this.lieferantenStatistik = data.rundenStatistikLieferanten;
            this.produzentenStatistik = data.rundenStatistikProduktionsunternehmen;
            this.router.navigate(['/dashboard']);
        });

    } 

    httpPostExpertSimulation(expertSim:ExpertSimulation) {
        return this.http.post(this.simulationAPI, expertSim);
    } 

}
