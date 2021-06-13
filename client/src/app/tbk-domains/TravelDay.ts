import { Evenement } from "./Evenement";

export class TravelDay {
	date: Date;
	libelle: string;
	isFixDate: boolean;
	evenements: Evenement[];
	
	constructor(date: Date, libelle: string, isFixDate: boolean) {
		this.date = date;
		this.libelle = libelle;
		this.isFixDate = isFixDate;
		this.evenements = [];
	}

}