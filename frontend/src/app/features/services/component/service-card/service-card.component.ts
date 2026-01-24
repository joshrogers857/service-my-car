import { Component, Input } from '@angular/core';
import { Service } from '../../model/service';

@Component({
  selector: 'app-service-card',
  standalone: false,
  templateUrl: './service-card.component.html'
})
export class ServiceCardComponent {
    @Input({ required: true })
    public service!: Service;
}
