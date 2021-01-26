import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lieferant } from 'src/models/lieferant';
import { Produktionsunternehmen } from 'src/models/produktionsunternehmen';
import { Kunde } from 'src/models/kunde';
import { ExpertSimulation } from '../../models/expertsimulation';
import { SimulationService } from '../simulation.service';

@Component({
  selector: 'app-expert-mode',
  templateUrl: './expert-mode.component.html',
  styleUrls: ['./expert-mode.component.css']
})
export class ExpertModeComponent implements OnInit {

    expertSim:ExpertSimulation;
    router:Router;
    simulationService:SimulationService;

    lieferant:Lieferant;
    produktionsunternehmen:Produktionsunternehmen;
    kunde:Kunde;
    eventWahrscheinlichkeit:number;
    rundenanzahl:number;

    lieferantenArray=[];
    produktionsunternehmenArray=[];
    kundenArray=[];
    
  constructor() { }

  ngOnInit() {
      this.lieferant = new Lieferant();
      this.produktionsunternehmen = new Produktionsunternehmen();
      this.kunde = new Kunde();
      this.lieferantenArray.push(this.lieferant);
      this.produktionsunternehmenArray.push(this.produktionsunternehmen);
      this.kundenArray.push(this.kunde);
  }

  onSubmit(simulationInput) {
  /* this.simulationService.getSimulation().subscribe(simulation => {
      this.simulation = simulation;
  }) */
  console.log(this.expertSim);
  console.log(simulationInput);
  this.router.navigate(['dashboard']);
  }

  addLieferant() {
      this.lieferant = new Lieferant();
      this.lieferantenArray.push(this.lieferant);
    return this.lieferantenArray;
  }

  addProduktionsunternehmen() {
      this.produktionsunternehmen = new Produktionsunternehmen();
      this.produktionsunternehmenArray.push(this.produktionsunternehmen);
    return this.produktionsunternehmenArray;
  }

  addKunde() {
      this.kunde = new Kunde();
      this.kundenArray.push(this.kunde);
      console.log(this.kundenArray)
    return this.kundenArray;
  }

  onSubmitExpert(rundenanzahl, eventWahrscheinlichkeit) {
    this.expertSim =  {
    rundenanzahl: rundenanzahl,
    eventWahrscheinlichkeit: eventWahrscheinlichkeit,
    lieferanten: this.lieferantenArray,
    kunden: this.kundenArray,
    produktionsunternehmen: this.produktionsunternehmenArray
    }; 
    console.log(this.expertSim);
    this.simulationService.httpPostExpertSimulation(this.expertSim).subscribe(() => {});
    this.router.navigate(['/dashboard']);
    }
}
