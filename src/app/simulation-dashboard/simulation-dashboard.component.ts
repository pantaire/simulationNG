import { Component, OnInit, Input } from '@angular/core';
import { Simulation } from '../simulation';
import { Chart } from 'node_modules/chart.js';

@Component({
    selector: 'app-simulation-dashboard',
    templateUrl: './simulation-dashboard.component.html',
    styleUrls: ['./simulation-dashboard.component.css']
})
export class SimulationDashboardComponent implements OnInit {
    
    constructor() {}
    
    @Input() simulation: Simulation;
    ngOnInit(): void {
        
    var lieferantenColour = 'rgb(77, 225, 255)';
    var produzentenColour = 'rgb(0, 153, 255)';
    var kundenColour = 'rgb(153, 51, 255)';

    var options = {
        responsive: true,
        title: {
            display: false,
          },
        legend: {
          display: false,
        },
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
    };
    
  var gesamtZahlen = new Chart("gesamtZahlen", {
      type: 'bar',
      data: {
        labels: ['Lieferanten', 'Produktionsunternehmen', 'Kunden'],
        datasets: [{
          label: 'Gesamtzahl',
          data: [120, 190, 170],
          backgroundColor: [
            lieferantenColour,
            produzentenColour,
            kundenColour
          ],
        }]
      },
      options: options
    });
  
  var gesamtVermoegen = new Chart("gesamtVermoegen", {
    type: 'line',
    data: {
      labels: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
      datasets: [
        {
        label: 'Gesamtvermögen Lieferanten',
        data: [120, 190, 170, 128, 239, 111, 120, 90, 100, 140],
        borderColor:
            lieferantenColour,
        },
        {
        label: 'Gesamtvermögen Produzenten',
        data: [200, 239, 111, 120, 90, 100, 190, 170, 128, 10],
        borderColor:
            produzentenColour,
        },
        {
        label: 'Gesamtvermögen Kunden',
        data: [130, 90, 100, 190, 170, 128, 140, 120, 239, 111],
        borderColor:
            kundenColour,
        },
    ]
    },
    options: options
  });
  
  var KapitalrankingL = new Chart("KapitalrankingL", {
    type: 'bar',
    data: {
      labels: ['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8', 'L9', 'L10'],
      datasets: [{
          label: 'Kapitalranking Lieferanten',
          fillColor: lieferantenColour,
          data: [289, 270, 230, 208, 208, 170, 150, 146, 100, 40],
          backgroundColor:
              lieferantenColour,
            borderWidth: 1
        }]
    },
    options: options
  });

  var KapiralrankingPU = new Chart("KapitalrankingPU", {
    type: 'bar',
    data: {
      labels: ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10'],
      datasets: [{
        label: 'Kapitalranking Produktionsunternehmen',
        data: [289, 270, 230, 208, 208, 170, 150, 146, 100, 40],
        backgroundColor: 
            produzentenColour,
        borderWidth: 1
      }]
    },
    options: options
  });

  var BiggestL = new Chart("BiggestL", {
    type: 'pie',
    data: {
      labels: ['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8', 'L9', 'L10'],
      datasets: [{
          label: 'Kapitalranking Lieferanten',
          fillColor: lieferantenColour,
          data: [289, 270, 230, 208, 208, 170, 150, 146, 100, 40],
          backgroundColor:
              lieferantenColour,
            borderWidth: 1
        }]
    },
    options: options
  });

    var BiggestPU = new Chart("BiggestPU", {
    type: 'pie',
    data: {
      labels: ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10'],
      datasets: [{
        label: 'Kapitalranking Produktionsunternehmen',
        data: [289, 270, 230, 208, 208, 170, 150, 146, 100, 40],
        backgroundColor: 
            produzentenColour,
        borderWidth: 1
      }]
    },
    options: options
  });
  
}
}
