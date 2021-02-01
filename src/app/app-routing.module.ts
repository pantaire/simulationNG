import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpertModeComponent} from './expert-mode/expert-mode.component';
import { ParameterSelectionComponent } from './parameter-selection/parameter-selection.component';
import { SimulationDashboardComponent } from './simulation-dashboard/simulation-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: ParameterSelectionComponent },
  { path: 'expert', component: ExpertModeComponent },
  { path: 'dashboard', component: SimulationDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
