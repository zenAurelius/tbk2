
//import { TravelDay } from './TravelDay';

export class Travel {
	
	public countriesNames: string | undefined;
	public usersNames: string | undefined;
	public duration: number | undefined;
	//public days: TravelDay[] | undefined;
	
	constructor(	public _id: string | undefined,
					public users: any[],
					public countries: any[],
					public departDate: Date | undefined,
					public returnDate: Date | undefined,
					public devises: any[]) 
	{
		this.countriesNames = this.countries.map(c => c.name).join(', ');
				
		this.users.forEach( u => {
			if(this.usersNames != null) { 
				this.usersNames += ', ' + u.firstname
			} else {
				this.usersNames = u.firstname;}
		});
		
		if(this.returnDate && this.departDate){
			let ONE_DAY = 1000 * 60 * 60 * 24
			let date1_ms = this.returnDate.getTime()
			let date2_ms = this.departDate.getTime()
			let difference_ms = Math.abs(date1_ms - date2_ms)
			this.duration = Math.round(difference_ms/ONE_DAY)
		}
		
		//this.setTravelDays();
		if(!this.devises) {
			this.devises = [];
		}
	}
	
	static fromData(data: any){
		
		return new this(data._id, data.users, data.countries, new Date(data.departDate), new Date(data.returnDate), data.devises);
		
	}
	
	static fromScratch(){
		
		let users : any[] = [];
		let countries : any[] = [];
		return new this(undefined, users, countries, undefined, undefined, []);
		
	}
	
	// SET TRAVEL DAYS ************************************************************************************************
	/*public setTravelDays() {
		this.days= new Array<TravelDay>();
		
		var curday = new Date(this.departDate);
		this.days.push(new TravelDay(new Date(this.departDate), 'avant le départ', false));
		while(curday <= this.returnDate) {
			this.days.push(new TravelDay(new Date(curday), curday.toLocaleDateString(), true));
			curday.setDate(curday.getDate() + 1);
		}
		this.days.push(new TravelDay(new Date(curday), 'après le retour', false));
	}*/
}