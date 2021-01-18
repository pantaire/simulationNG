import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Simulation } from './simulation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

    simulationUrl:string = 'localhost:8080/simulation';

    constructor(private http:HttpClient) { }

    getSimulation():Observable<Simulation> {
        return this.http.get<Simulation>(this.simulationUrl);
  }

}
