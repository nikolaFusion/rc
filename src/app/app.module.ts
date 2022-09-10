import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ChartComponent } from './chart/chart.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {
  AccumulationChartModule,
  PieSeriesService,
  AccumulationDataLabelService,
  AccumulationLegendService,
} from '@syncfusion/ej2-angular-charts';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ChartComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxChartsModule,
    AccumulationChartModule,
  ],

  providers: [
    PieSeriesService,
    AccumulationLegendService,
    AccumulationDataLabelService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
