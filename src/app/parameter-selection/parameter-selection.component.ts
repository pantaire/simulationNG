import { Component, OnInit } from '@angular/core';
import { Simulation } from '../simulation';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-parameter-selection',
  templateUrl: './parameter-selection.component.html',
  styleUrls: ['./parameter-selection.component.css']
})

export class ParameterSelectionComponent implements OnInit {
  
  //maybe change later, not sure at this point
  simulationInput: Simulation;
  private simulationAPI = 'localhost:8080/simulation';  // URL to web api
  
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(simulationInput) {
    this.http.post(this.simulationAPI, simulationInput)
    .subscribe((result)=>{
      console.log(result,"result")
    })
    console.warn(simulationInput);
    this.router.navigate(['dashboard']);
  }
}