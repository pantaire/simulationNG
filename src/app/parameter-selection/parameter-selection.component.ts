import { Component, OnInit, Input } from '@angular/core';
import { Simulation } from '../simulation';
import { SimulationService } from '../simulation.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-parameter-selection',
  templateUrl: './parameter-selection.component.html',
  styleUrls: ['./parameter-selection.component.css']
})

export class ParameterSelectionComponent implements OnInit {

  @Input() simulationInput:Simulation;
  private simulationAPI = 'localhost:8080/simulation';
  
  constructor(private router: Router, private http: HttpClient, simulationService:SimulationService) { }

  ngOnInit() {
    this.simulationService.getSimulation().subscribe();
  }

  onSubmit(simulationInput) {
    this.http.post('localhost:8080/simulation', simulationInput)
    .subscribe((result)=>{
      console.log(result,"result")
    })
    console.log(simulationInput);
    this.router.navigate(['dashboard']);
  }
}