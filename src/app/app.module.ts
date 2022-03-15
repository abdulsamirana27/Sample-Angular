import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {LayoutComponent} from "./layout-component/layout-component.component";
import {LayoutModule} from "./layout-component/layout.module";
import {CdkAccordionModule} from "@angular/cdk/accordion";
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import {NgApexchartsModule} from "ng-apexcharts";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    RadarChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    CdkAccordionModule,
    NgApexchartsModule,

  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {
}
