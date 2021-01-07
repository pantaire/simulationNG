export interface Simulation {
    rundenanzahl: number;
    eventWahrscheinlichkeit: number;
    lieferantenanzahl: number;
    kundenanzahl: number;
    // produktpalette: produktpalette;
    startKapitalKMax: number;
    startKapitalKMin: number;
    produktionsunternehmenanzahl: number;
    startKapitalPUMin: number;
    startKapitalPUMax: number;
    startKapitalLMin: number;
    startKapitalLMax: number;
    produktionsmengePUMin: number;
    produktionsmengePUMax: number;
    produktionsmengeLMin: number;
    produktionsmengeLMax: number;
    //kauflustKunden: number;
    lagerLMin: number;
    lagerLMax: number;
    lagerPUMin: number;
    lagerPUMax: number;
}