import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbkHeaderComponent } from './tbk-header.component';

describe('TbkHeaderComponent', () => {
    let component: TbkHeaderComponent;
    let fixture: ComponentFixture<TbkHeaderComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ TbkHeaderComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TbkHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
