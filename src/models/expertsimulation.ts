import { Lieferant } from 'src/models/lieferant';
import { Produktionsunternehmen } from 'src/models/produktionsunternehmen';
import { Kunde } from 'src/models/kunde';

export class ExpertSimulation {
    rundenanzahl: number;
    eventWahrscheinlichkeit: number;
    lieferanten: Lieferant[];
    produktionsunternehmen: Produktionsunternehmen[];
    kunden: Kunde[];    
}