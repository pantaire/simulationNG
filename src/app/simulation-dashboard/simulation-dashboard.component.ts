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

    //used for http response
    dataL=[];
    dataPU=[];
    dataK=[];
    events=[];
    arraylength;

    @Input() simulation: Simulation;
    ngOnInit(): void {

        //log data from http response for debugging
        console.log(this.service.kundenStatistik);
        console.log(this.service.produzentenStatistik);
        console.log(this.service.lieferantenStatistik);
        console.log(this.service.eventVerlauf);
        //console.log(this.service.events);

        // defines colours for diagrams, used in options
        var lieferantenColour = 'rgb(77, 225, 255)';
        var produzentenColour = 'rgb(0, 153, 255)';
        var kundenColour = 'rgb(153, 51, 255)';

        // data extruded from http response, used to build diagrams
        //this.events = Object.values(this.service.event)
        this.dataL  = Object.values(this.service.lieferantenStatistik);
        this.dataPU = Object.values(this.service.produzentenStatistik);
        this.dataK  = Object.values(this.service.kundenStatistik);
        this.events = Object.values(this.service.eventVerlauf);
        var labelL  = Object.keys(this.service.lieferantenStatistik);
        var labelPU = Object.keys(this.service.produzentenStatistik);
        var labelK  = Object.keys(this.service.kundenStatistik);
        this.arraylength = this.dataL.length;
        
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
                        beginAtZero: true,
                        min: 0
                    },
                    scaleLabel: {
                        labelString: "Gesamtvermögen",
                        display: true
                    }
                }],
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        labelString: "Zeitraum",
                        display: true
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
                data: this.dataL,
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
                data: this.dataPU,
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
                data: this.dataK,
                backgroundColor: [
                kundenColour
                ],
            }]
            },
            options: options
        });
    }
}
