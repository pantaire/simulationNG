import { Component, OnInit } from '@angular/core';
import { Simulation } from '../simulation';
import { SimulationService } from '../simulation.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-parameter-selection',
  templateUrl: './parameter-selection.component.html',
  styleUrls: ['./parameter-selection.component.css']
})
export class ParameterSelectionComponent implements OnInit {

    //maybe change later, not sure at this point
    simulationInput: Simulation;
    

  constructor(private simulationService: SimulationService) { }

  getSimulation(): void {
    this.simulationService.getSimulation()
        .subscribe(simulation => this.simulation = simulation);
  }
  ngOnInit(): void {
    this.getSimulation();
  }
}