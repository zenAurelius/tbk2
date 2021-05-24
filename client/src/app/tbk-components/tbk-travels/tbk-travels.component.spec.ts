import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbkTravelsComponent } from './tbk-travels.component';

describe('TbkTravelsComponent', () => {
    let component: TbkTravelsComponent;
    let fixture: ComponentFixture<TbkTravelsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [ TbkTravelsComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TbkTravelsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
