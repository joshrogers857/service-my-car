import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ModalContent } from "../../../../core/interfaces/can-show-in-modal.interface";
import { ServiceRecordService } from "../../service/service-records.service";
import { ServiceRecord } from "../../model/service-record";

@Component({
  standalone: false,
  templateUrl: './edit-service-form.component.html',
})
export class EditServiceFormComponent implements ModalContent, OnInit {

  @Input() record!: ServiceRecord;

  protected formGroup = new FormGroup({
    mileage: new FormControl(0),
    date: new FormControl("2000-01-01"),
  });

  public constructor(
    private serviceRecordService: ServiceRecordService,
  ) {}

  public ngOnInit(): void {
    const mileageControl = this.formGroup.get('mileage');
    const dateControl = this.formGroup.get('date');

    if (mileageControl) {
      mileageControl.setValue(this.record.mileage);
    }

    if (dateControl) {
      dateControl.setValue(this.record.date);
    }
  }

  public onSubmit(): void {
    this.serviceRecordService.editRecord({
      uuid: this.record.uuid,
      type: this.record.type,
      mileage: this.formGroup.get('mileage')!.value ?? 0,
      date: this.formGroup.get('date')!.value ?? "2000-01-01",
    });
  }
}