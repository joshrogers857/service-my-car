import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './page/list/list.component';
import { ViewComponent } from './page/view/view.component';
import { ServiceCardComponent } from './component/service-card/service-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceFormComponent } from './component/service-form/service-form.component';

@NgModule({
  declarations: [
    ListComponent,
    ViewComponent,
    ServiceCardComponent,
    ServiceFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class ServicesModule { }
