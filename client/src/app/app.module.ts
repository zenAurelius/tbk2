import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";

import { GoogleChartsModule } from 'angular-google-charts';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TbkHeaderComponent } from './tbk-components/tbk-header/tbk-header.component';
import { TbkTravelsComponent } from './tbk-components/tbk-travels/tbk-travels.component';

@NgModule({
  declarations: [
    AppComponent,
    TbkHeaderComponent,
    TbkTravelsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    GoogleChartsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [
    MatNativeDateModule,
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

registerLocaleData(localeFr, "fr");
