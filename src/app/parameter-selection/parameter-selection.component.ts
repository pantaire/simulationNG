import { Component, OnInit } from '@angular/core';
import { Simulation } from '../simulation';


@Component({
  selector: 'app-parameter-selection',
  templateUrl: './parameter-selection.component.html',
  styleUrls: ['./parameter-selection.component.css']
})
export class ParameterSelectionComponent implements OnInit {

    simulation: Simulation = {
      rundenanzahl: 1000,
      eventWahrscheinlichkeit: 80,
      lieferantenanzahl: 50,
      produktionsunternehmenanzahl: 50,
      kundenanzahl: 300,
      // produktpalette: produktpalette;
      startKapitalPUMin: 10000,
      startKapitalPUMax: 1000000,
      startKapitalLMin:  10000,
      startKapitalLMax:  1000000,
      startKapitalKMin: 10,
      startKapitalKMax: 10000,
      produktionsmengePUMin: 40,
      produktionsmengePUMax: 2000,
      produktionsmengeLMin: 20,
      produktionsmengeLMax: 8000,
      kauflustKunden: 50
    };
  constructor() { }

  ngOnInit(): void {
  }
}