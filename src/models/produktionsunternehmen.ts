import { Currency } from './currency';

export class Produktionsunternehmen {
    //region: Region;
	currency: Currency; // umbenannt von währung wegen Umlaut
    name: string;
	kapital: number; 
	kaufInteresse: number;
	produktionsmenge: number;
	kosten: number; 
    lagerkap: number; // umbenannt von lagerkapazität wegen Umlaut
}