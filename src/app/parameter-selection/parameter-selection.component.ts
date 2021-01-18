import { Component, OnInit, Input } from '@angular/core';
import { Simulation } from '../simulation';
import { Todo } from '../Todo';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-parameter-selection',
  templateUrl: './parameter-selection.component.html',
  styleUrls: ['./parameter-selection.component.css']
})

export class ParameterSelectionComponent implements OnInit {
  
  //instantiates simulationInput of type Simulation
  //simulationInput: Simulation
  todos: Todo[]

  @Input() simulationInput: Simulation
  sim: Simulation;
  private simulationAPI = 'localhost:8080/simulation';  // URL to web api
  
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

    this. todos = [
        {
            id: 1,
            title: "Nummer 1",
            completed: true
        },
        {
            id: 2,
            title: "Nummer 2",
            completed: false
        },
        {
            id: 3,
            title: "Nummer 3",
            completed: true
        }
    ]
      this.sim =
          {
            rundenanzahl: 123,
            eventWahrscheinlichkeit: 34,
            lieferantenanzahl: 12,
            kundenanzahl: 342,
            // produktpalette: produktpalette;
            startKapitalKMax: 23,
            startKapitalKMin: 23,
            produktionsunternehmenanzahl: 78,
            startKapitalPUMin: 76,
            startKapitalPUMax: 322,
            startKapitalLMin: 38,
            startKapitalLMax: 33,
            produktionsmengePUMin: 23,
            produktionsmengePUMax: 34,
            produktionsmengeLMin: 12,
            produktionsmengeLMax: 34,
            //kauflustKunden: number;
            lagerLMin: 35,
            lagerLMax: 224,
            lagerPUMin: 45,
            lagerPUMax: 23
          }
  }

  onSubmit(simulationInput) {
    this.http.post('localhost:8080/simulation', simulationInput)
    .subscribe((result)=>{
      console.log(result,"result")
    })
    console.warn(simulationInput);
    this.router.navigate(['dashboard']);
  }
}