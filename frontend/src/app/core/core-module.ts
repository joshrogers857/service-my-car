import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { AppRoutingModule } from "../app-routing-module";

@NgModule({
  declarations: [
    AppLayoutComponent,
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
]
})
export class CoreModule { }
