import { NgModule, InjectionToken } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { CandidateAssessmentComponent } from './public/candidate-assessment/candidate-assessment.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'project-alpha',
    pathMatch: 'full'
  },
  {
    path: 'project-alpha',
    loadChildren: './public/project-alpha/project-alpha.module#ProjectAlphaModule'
  },
  {
    path: 'candidate-assessment',
    component: CandidateAssessmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
