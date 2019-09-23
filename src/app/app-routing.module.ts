import { Descontosv2Component } from './descontosv2/descontosv2.component';
import { DescontosComponent } from './descontos/descontos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: DescontosComponent},
  {path: 'v2', component: Descontosv2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
