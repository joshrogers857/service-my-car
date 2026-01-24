import { Component } from '@angular/core';
import { Service, ServiceType } from '../../model/service';

@Component({
  standalone: false,
  templateUrl: './list.component.html'
})
export class ListComponent {
  public services: Service[] = [
    {
      type: ServiceType.OilAndOilFilter,
      interval: {
        mileage: 7000,
        months: 12
      }
    }
  ];
}
