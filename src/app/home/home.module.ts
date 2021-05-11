import {NgModule} from '@angular/core';
import {ContainerComponent} from './container/container.component';
import {HomeRoutingModule} from "./home-routing.module";
import { PageComponent } from './page/page.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    ContainerComponent,
    PageComponent
  ],
  imports: [
    HomeRoutingModule,
    MatButtonModule
  ]
})
export class HomeModule { }
