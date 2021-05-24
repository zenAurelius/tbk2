import { Component, OnInit, Input } from '@angular/core';

import { Output, EventEmitter } from '@angular/core';
import { Country } from 'src/app/tbk-domains/Country';
import { ChartType} from 'angular-google-charts';

import { Travel } from 'src/app/tbk-domains/Travel';
import { SrvTravelsService } from 'src/app/tbk-services/srv-travels.service';


@Component({
  selector: 'tbk-travels',
  templateUrl: './tbk-travels.component.html',
  styleUrls: ['./tbk-travels.component.scss']
})


export class TbkTravelsComponent implements OnInit {

  @Input() countries : Country[] | undefined;
  @Output() selectTravelEvent = new EventEmitter<Travel>();
  travels : Travel[] = [];
  selectedTravel : Travel | undefined;
  addedTravel : Travel | undefined;
  shownAction : string = 'list';
  friends : any[] = [{firstname:'Dorine'}];
  
  type: ChartType = ChartType.GeoChart;
  mapData :any[] = []; 
  mapHeight : number = 500;
  mapWidth : number = 1000;
  mapOptions = {
    region:'world',
    backgroundColor: '#81d4fa',
  };


  constructor(private srvTravel : SrvTravelsService) { }

  ngOnInit(): void {
    this.getTravels();
  }

  public getTravels(){
    this.srvTravel.getTravels()
      .subscribe(travels => {
          this.travels = travels;
          let data : any = {};
          this.travels.forEach(t => {
            t.countries.forEach(c => {
              data[c._id_2] = (data[c._id_2] || 0) + 1
            });
          });
    
        this.mapData = Object.entries(data);
      });

  }

  public selectTravel( travel : Travel ) {
    console.log(travel);
    this.selectTravelEvent.emit(travel);
    this.selectedTravel = travel;
		//this.parent.setTravel(travel);
		/*var mapObject = $('#map').vectorMap('get', 'mapObject');
		mapObject.clearSelectedRegions();
		if(travel) {
			let countriesCode = travel.countries.map(function(e) {return e._id_2;});
			mapObject.setSelectedRegions(countriesCode);
		}*/
	}

  onMapOptionChange(){
    console.log('change');
    this.mapData = Object.assign([], this.mapData);
    this.mapOptions = Object.assign([], this.mapOptions);
  }
  

  openAddTravel(){
    console.log(1, this.shownAction, this.addedTravel);
    this.addedTravel = Travel.fromScratch();
    console.log(2, this.shownAction, this.addedTravel);
		this.shownAction = 'add';
    console.log(3, this.shownAction, this.addedTravel);
  }

  addTravel(){
    //travel.users.push(this.parent.connectedUser);
    if(this.addedTravel) {
      this.srvTravel.addTravel(this.addedTravel);
      this.getTravels();
    }
  }

  deleteTravel(){
    if(this.selectedTravel){
      this.srvTravel.deleteTravel(this.selectedTravel);
      this.getTravels();
    }
  }

}
