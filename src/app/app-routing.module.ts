import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"card-preferencias",
    loadChildren: () => import('./card-preferencias/card-preferencias.component').then(m => m.CardPreferenciasComponent)
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
