import { Component, OnInit } from '@angular/core';
import { Simulation } from '../simulation';
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
  
  constructor(private http: HttpClient) { }

  
  ngOnInit(): void {
  }

  onSubmit(data) {
    this.http.post('http://localhost:4200/dashboard',data)
    .subscribe((result)=>{
      console.warn(result,"result")
    })
    console.warn(data);
  }
}