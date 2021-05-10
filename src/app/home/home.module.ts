import {NgModule} from '@angular/core';
import {ContainerComponent} from './container/container.component';
import {HomeRoutingModule} from "./home-routing.module";
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    ContainerComponent,
    PageComponent
  ],
  imports: [
    HomeRoutingModule
  ]
})
export class HomeModule { }
