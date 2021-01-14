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

    var optionsBar = {
        scales: {
        responsive: true,
        title: {
            text: "Input / Output",
            display: true,
          },
        legend: {
          display: false,
        },
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      };

      var optionsPie = {
        responsive: true,
        title: {
            text: "Input / Output",
            display: true,
          },
        legend: {
          display: false,
        }
      };


    var data = {
        datasets: [{
            data: [10, 20, 30]
        }],
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
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
      options: optionsBar
    });
  
    var gesamtVermoegen = new Chart("gesamtVermoegen", {
    type: 'bar',
    data: {
      labels: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
      datasets: [{
        label: 'Gesamtvermögen nach Runde',
        fillColor: lieferantenColour,
        data: [120, 190, 170, 128, 239, 111, 120, 90, 100, 140],
        backgroundColor:
            lieferantenColour,
        borderWidth: 1
      }]
    },
    options: optionsBar
  });
  
    var InputL = new Chart("InputL", {
    type: 'bar',
    data: {
      labels: ['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8', 'L9', 'L10'],
      datasets: [{
          label: 'Input/Output Lieferanten',
          fillColor: lieferantenColour,
          data: [289, 270, 230, 208, 208, 170, 150, 146, 100, 40],
          backgroundColor:
              lieferantenColour,
            borderWidth: 1
        }]
    },
    options: optionsPie,
  });

    var InputPU = new Chart("InputPU", {
    type: 'line',
    data: {
      labels: ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10'],
      datasets: [{
        label: 'Input/Output Produktionsunternehmen',
        data: [289, 270, 230, 208, 208, 170, 150, 146, 100, 40],
        borderColor: 
            produzentenColour,
        borderWidth: 1
      }]
    },
    options: optionsPie
  });

  var InputK = new Chart("InputK", {
    type: 'line',
    data: {
      labels: ['K1', 'K2', 'K3', 'K4', 'K5', 'K6', 'K7', 'K8', 'K9', 'K10'],
      datasets: [{
        label: 'Input Kunden',
        data: [28, 70, 89, 108, 108, 120, 150, 176, 180, 240],
        backgroundColor: 
            kundenColour,
        borderWidth: 1
      }]
    },
    options: optionsPie
  });

}
}
