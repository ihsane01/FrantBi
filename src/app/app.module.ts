import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { CHART1Component } from './chart1/chart1.component';
import { HttpClientModule } from '@angular/common/http';
import { CHART2Component } from './chart2/chart2.component';
import { CHART3Component } from './chart3/chart3.component';
import { CHART4Component } from './chart4/chart4.component';
// import {MatCardModule} from '@angular/material/card';
// import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    CHART1Component,
    HomeComponent,
    CHART2Component,
    CHART3Component,
    CHART4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarComponent,
    MatSlideToggleModule,
  
    FlexLayoutModule,
    FlexLayoutServerModule,
    MatCardModule, MatButtonModule,
    MatIconModule,

    MatCardModule, MatButtonModule,
    HttpClientModule,
    




    

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
