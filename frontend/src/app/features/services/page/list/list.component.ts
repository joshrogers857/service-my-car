import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Service } from '../../model/service';
import { FormControl, FormGroup } from '@angular/forms';
import { CacheService } from '../../../../core/services/cache.service';

@Component({
  standalone: false,
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  
  protected services: Service[] = [];

  private CURRENT_MILEAGE_STORAGE_KEY = 'current-mileage';
  private BUILD_DATE_STORAGE_KEY = 'build-date';

  protected formGroup = new FormGroup({
    currentMileage: new FormControl(0),
    buildDate: new FormControl("2000-01-01"),
  });

  public constructor(
    public serviceService: ServiceService,
    public cacheService: CacheService,
  ) {}

  public ngOnInit(): void {
    this.services = this.serviceService.getServices();
    this.formGroup.get('currentMileage')?.setValue(this.cacheService.getItem<number>(this.CURRENT_MILEAGE_STORAGE_KEY));
    this.formGroup.get('buildDate')?.setValue(this.cacheService.getItem<string>(this.BUILD_DATE_STORAGE_KEY));
  }

  public onSubmit(): void {
    this.cacheService.setItem(this.CURRENT_MILEAGE_STORAGE_KEY, this.formGroup.get('currentMileage')?.value);
    this.cacheService.setItem(this.BUILD_DATE_STORAGE_KEY, this.formGroup.get('buildDate')?.value);
  }
}
