import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import{ChartComponent} from './chart/chart.component';
import { BarchartComponent } from './barchart/barchart.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule,ChartModule ,ReactiveFormsModule],
  declarations: [ AppComponent ,ChartComponent, BarchartComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
