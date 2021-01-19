import { Simulation } from '../models/simulation';

export const sim: Simulation = {
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
    lagerLMin: 10,
    lagerLMax: 40,
    lagerPUMin: 15,
    lagerPUMax: 30,
  };