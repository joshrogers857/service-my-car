import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './page/list/list.component';
import { ViewComponent } from './page/view/view.component';
import { ServiceCardComponent } from './component/service-card/service-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddServiceFormComponent } from './component/add-service-form/add-service-form.component';
import { EditServiceFormComponent } from './component/edit-service-form/edit-service-form.component';

@NgModule({
  declarations: [
    ListComponent,
    ViewComponent,
    ServiceCardComponent,
    AddServiceFormComponent,
    EditServiceFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class ServicesModule { }
