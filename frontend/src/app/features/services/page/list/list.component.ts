import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Service } from '../../model/service';

@Component({
  standalone: false,
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  
  protected services: Service[] = [];

  public constructor(
    public serviceService: ServiceService
  ) {}

  public ngOnInit(): void {
    this.services = this.serviceService.getServices();
  }
}
