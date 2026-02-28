import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Service } from '../../model/service';
import { ServiceRecord } from '../../model/service-record';
import { ServiceRecordService } from '../../service/service-records.service';
import { ModalService } from '../../../../core/services/modal.service';
import { AddServiceFormComponent } from '../add-service-form/add-service-form.component';
import { EditServiceFormComponent } from '../edit-service-form/edit-service-form.component';

@Component({
  selector: 'app-service-card',
  standalone: false,
  templateUrl: './service-card.component.html',
})
export class ServiceCardComponent implements OnInit {
    @Input({ required: true })
    public service!: Service;

    public records: ServiceRecord[] = [];

    public get serviceNextDue(): string {
      if (this.records.length) {
        const record = this.records[this.records.length - 1];
        const miles = record.mileage + this.service.interval.mileage;
        const date = new Date(record.date);
        const nextDate = new Date(new Date(date).setMonth(date.getMonth() + this.service.interval.months));

        return miles + ' miles or ' + nextDate.toDateString();
      }

      return 'Please add a service record';
    }

    public constructor(
      private serviceRecordService: ServiceRecordService,
      private modalService: ModalService,
      private cdr: ChangeDetectorRef,
    ) {}

    public ngOnInit(): void {
      this.getServiceRecordsForServiceType();
    }

    public openNewRecordModal(): void {
      this.modalService.openModal({
        title: 'Add New Record: ' + this.service.type,
        submitBtnText: 'Add Record',
        contentComponent: AddServiceFormComponent,
        inputs: {
          serviceType: this.service.type,
        }
      }).subscribe(() => {
        this.getServiceRecordsForServiceType();
        this.cdr.detectChanges();
      });
    }

    public openEditRecordModal(record: ServiceRecord): void {
      this.modalService.openModal({
        title: 'Edit Record: ' + this.service.type,
        submitBtnText: 'Edit Record',
        contentComponent: EditServiceFormComponent,
        inputs: {
          record: record,
        }
      }).subscribe(() => {
        this.getServiceRecordsForServiceType();
        this.cdr.detectChanges();
      });
    }

    public deleteRecord(record: ServiceRecord): void {
      this.serviceRecordService.deleteRecord(record);
      this.getServiceRecordsForServiceType();
    }

    private getServiceRecordsForServiceType(): void {
      this.records = this.serviceRecordService.getRecordsForServiceType(this.service.type);
    }
}
