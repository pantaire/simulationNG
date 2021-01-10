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
    var chart1 = new Chart("chart1", {
      type: 'bar',
      data: {
        labels: ['Lieferanten', 'Produktionsunternehmen', 'Kunden'],
        datasets: [{
          label: 'Gesamtzahl',
          data: [120, 190, 170],
          backgroundColor: [
            'rgb(0, 204, 255)',
            'rgb(0, 153, 255)',
            'rgb(153, 51, 255)'
          ],
          borderColor: [
            'rgb(0, 204, 255)',
            'rgb(0, 153, 255)',
            'rgb(153, 51, 255)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  
  var chart2 = new Chart("chart2", {
    type: 'bar',
    data: {
      labels: ['Lieferanten', 'Produktionsunternehmen', 'Kunden'],
      datasets: [{
        label: 'Gesamtzahl',
        data: [120, 190, 170],
        backgroundColor: [
        'rgb(0, 204, 255)',
        'rgb(0, 153, 255)',
        'rgb(153, 51, 255)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
}
