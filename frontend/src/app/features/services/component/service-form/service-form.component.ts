import { Component, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ModalContent } from "../../../../core/interfaces/can-show-in-modal.interface";
import { ServiceType } from "../../model/service";
import { ServiceRecordService } from "../../service/service-records.service";

@Component({
  standalone: false,
  templateUrl: './service-form.component.html',
})
export class ServiceFormComponent implements ModalContent {

  @Input() serviceType!: ServiceType;

  protected formGroup = new FormGroup({
    mileage: new FormControl(0),
    date: new FormControl("2000-01-01"),
  });

  public constructor(
    private serviceRecordService: ServiceRecordService,
  ) {}

  public onSubmit(): void {
    this.serviceRecordService.saveRecordForServiceType(this.serviceType, {
      mileage: this.formGroup.get('mileage')!.value ?? 0,
      date: this.formGroup.get('date')!.value ?? "2000-01-01",
    });
  }
}