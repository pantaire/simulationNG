
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ParameterSelectionComponent } from './parameter-selection/parameter-selection.component';
import { SimulationDashboardComponent } from './simulation-dashboard/simulation-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { WeatherComponent } from './weather/weather.component';
import { ExpertModeComponent } from './expert-mode/expert-mode.component';

@NgModule({
  declarations: [
    AppComponent,  
    FooterComponent,
    HeaderComponent,
    ParameterSelectionComponent,
    SimulationDashboardComponent,
    WeatherComponent,
    ExpertModeComponent
  ],  
  imports: [
    HttpClientModule,  
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],  
  providers: [], 
  bootstrap: [AppComponent]
})  
export class AppModule { }

