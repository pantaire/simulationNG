import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

import { Simulation } from '../../models/simulation';
import { SimulationService } from '../simulation.service';

@Component({
    selector: 'app-simulation-dashboard',
    templateUrl: './simulation-dashboard.component.html',
    styleUrls: ['./simulation-dashboard.component.css']
})
export class SimulationDashboardComponent implements OnInit {

    constructor(private service:SimulationService) {}

    @Input() simulation: Simulation;
    ngOnInit(): void {

        //log data from http response for debugging
        console.log(this.service.kundenStatistik);
        console.log(this.service.produzentenStatistik);
        console.log(this.service.lieferantenStatistik);

        // defines colours for diagrams, used in options
        var lieferantenColour = 'rgb(77, 225, 255)';
        var produzentenColour = 'rgb(0, 153, 255)';
        var kundenColour = 'rgb(153, 51, 255)';

        // data extruded from http response, used to build diagrams
        var dataPU  = Object.values(this.service.produzentenStatistik);
        var dataL   = Object.values(this.service.lieferantenStatistik);
        var dataK   = Object.values(this.service.kundenStatistik);
        var labelPU = Object.keys(this.service.produzentenStatistik);
        var labelL  = Object.keys(this.service.lieferantenStatistik);
        var labelK  = Object.keys(this.service.kundenStatistik);
        
        //options to display diagrams
        var options = {
            responsive: true,
            title: {
                display: false
            },
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        beginAtZero: true
                    },
                    scaleLabel: {
                        labelString: "Zeitraum",
                        display: true
                    }
                }],
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        labelString: "Gesamtvermögen"
                    }
                }]
            }    
        };

        //Lieferantendiagramm
        new Chart("rundenStatistikL", {
            type: 'line',
            data: {
            labels: labelL,
            datasets: [{
                label: 'Gesamtvermögen',
                data: dataL,
                backgroundColor: [
                    lieferantenColour
                ],
            }]
            },
            options: options
        });

        //Produzentendiagramm
        new Chart("rundenStatistikPU", {
            type: 'line',
            data: {
            labels: labelPU,
            datasets: [{
                label: 'Gesamtvermögen',
                data: dataPU,
                backgroundColor: [
                produzentenColour
                ],
            }]
            },
            options: options
        });

        //Kundendiagramm
        new Chart("rundenStatistikK", {
            type: 'line',
            data: {
            labels: labelK,
            datasets: [{
                label: 'Gesamtvermögen',
                data: dataK,
                backgroundColor: [
                kundenColour
                ],
            }]
            },
            options: options
        });
    }
}
