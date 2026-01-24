import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './page/list/list.component';
import { ViewComponent } from './page/view/view.component';
import { ServiceCardComponent } from './component/service-card/service-card.component';

@NgModule({
  declarations: [
    ListComponent,
    ViewComponent,
    ServiceCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ServicesModule { }
