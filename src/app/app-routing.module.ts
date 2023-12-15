import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoComponent } from './ingreso/ingreso.component';
import { SeccionPersonaComponent } from './seccion-persona/seccion-persona.component';

const routes: Routes = [
  {path : "ingreso", component : IngresoComponent},
  {path : "listado", component : SeccionPersonaComponent},
  {path : "", redirectTo : "ingreso", pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
