import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Service } from '../../model/service';
import { ServiceRecord } from '../../model/service-record';
import { ServiceRecordService } from '../../service/service-records.service';
import { ModalService } from '../../../../core/services/modal.service';
import { ServiceFormComponent } from '../service-form/service-form.component';

@Component({
  selector: 'app-service-card',
  standalone: false,
  templateUrl: './service-card.component.html',
})
export class ServiceCardComponent implements OnInit {
    @Input({ required: true })
    public service!: Service;

    public records: ServiceRecord[] = [];

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
        contentComponent: ServiceFormComponent,
        inputs: {
          serviceType: this.service.type,
        }
      }).subscribe(() => {
        this.getServiceRecordsForServiceType();
        this.cdr.detectChanges();
      });
    }

    private getServiceRecordsForServiceType(): void {
      this.records = this.serviceRecordService.getRecordsForServiceType(this.service.type);
    }
}
