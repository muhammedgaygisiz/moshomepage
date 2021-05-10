import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HOME} from "./utils";

const routes: Routes = [
  {
    path: HOME,
    pathMatch: 'full',
    loadChildren: () =>
      import('./home').then(module => module.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
