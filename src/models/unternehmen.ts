import { Währung } from './währung';

export class Produktionsunternehmen {
    //region: Region;
	währung: Währung; // in html als currency wegen Umlaut
    name: string;
	kapital: number; 
	kaufInteresse: number;
	produktionsmenge: number;
	kosten: number; 
    lagerkapazität: number; // in html als lagerkap wegen Umlaut
}