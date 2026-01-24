import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './page/list/list.component';
import { ViewComponent } from './page/view/view.component';

@NgModule({
  declarations: [
    ListComponent,
    ViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ServicesModule { }
