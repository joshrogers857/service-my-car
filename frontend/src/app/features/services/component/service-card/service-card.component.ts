import { Component, Input, OnInit } from '@angular/core';
import { Service } from '../../model/service';
import { ServiceRecord } from '../../model/service-record';
import { ServiceRecordService } from '../../service/service-records.service';
import { ModalService } from '../../../../core/services/modal.service';

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
    ) {}

    public ngOnInit(): void {
      this.records = this.serviceRecordService.getRecordsForServiceType(this.service.type);
    }

    public openNewRecordModal(): void {
      this.modalService.openModal({
        title: 'Add New Record',
        submitBtnText: 'Add Record',
      });
    }
}
