import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CONNEXIONComponent } from './connexion/connexion.component';
import { INSCRIPPTIONComponent } from './inscripption/inscripption.component';



const routes: Routes = [
  { path: '', component: CONNEXIONComponent},
  { path: 'connexion', component: CONNEXIONComponent},
  { path: 'inscripption', component: INSCRIPPTIONComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
