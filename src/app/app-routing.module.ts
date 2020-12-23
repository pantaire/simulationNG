import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { simulation } from './mock-sim';
import { ParameterSelectionComponent } from './parameter-selection/parameter-selection.component';
import { SimulationDashboardComponent } from './simulation-dashboard/simulation-dashboard.component';

const routes: Routes = [
  { path: 'start', component: ParameterSelectionComponent },
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'dashboard', component: SimulationDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
