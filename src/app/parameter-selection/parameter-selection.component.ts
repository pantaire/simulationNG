import { Component, OnInit } from '@angular/core';
import { Simulation } from '../simulation';
import { SimulationService } from '../simulation.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-parameter-selection',
  templateUrl: './parameter-selection.component.html',
  styleUrls: ['./parameter-selection.component.css']
})
export class ParameterSelectionComponent implements OnInit {
  
  //maybe change later, not sure at this point
  simulationInput: Simulation;
  private simulationAPI = 'localhost:8000';  // URL to web api
  
  constructor(
    private http: HttpClient,
    private simulationService: SimulationService) { }

  getSimulation(): void {
    this.simulationService.getSimulation()
        .subscribe(simulation => this.simulation = simulation);
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  ngOnInit(): void {
    this.getSimulation();
  }

  onSubmit(data) {
    console.warn(data)
  }

}