import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {Travel} from '../../tbk-domains/Travel';

@Component({
    selector: 'tbk-header',
    templateUrl: './tbk-header.component.html',
    styleUrls: ['./tbk-header.component.scss']
})
export class TbkHeaderComponent implements OnInit {

    @Input() title : string;
    @Input() selectedTravel : Travel | undefined;
    @Output() navEvent = new EventEmitter<string>();
    
    constructor() {
      this.title = '';
    }

    ngOnInit(): void {
    }

    goToDetail(): void {
        this.navEvent.emit('DETAIL');
    }

    goToTravels(): void{
        this.navEvent.emit('TRAVELS');
    }

}
