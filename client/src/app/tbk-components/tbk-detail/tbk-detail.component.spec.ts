import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbkDetailComponent } from './tbk-detail.component';

describe('TbkDetailComponent', () => {
  let component: TbkDetailComponent;
  let fixture: ComponentFixture<TbkDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TbkDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TbkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
