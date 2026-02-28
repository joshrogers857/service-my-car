import { Injectable } from "@angular/core";
import { ServiceType } from "../model/service";
import { ServiceRecord } from "../model/service-record";
import { CacheService } from "../../../core/services/cache.service";

@Injectable({
  providedIn: 'root',
})
export class ServiceRecordService {
    public constructor(
        private cacheService: CacheService,
    ) {}

    /**
     * Get all records associated with the specified service type.
     * 
     * @param serviceType to get all records for
     * @returns any records found, or an empty array if none exist
     */
    public getRecordsForServiceType(serviceType: ServiceType): ServiceRecord[] {
        const records = this.cacheService.getItem<ServiceRecord[]>(serviceType);

        // TODO: consider sorting this before storing instead of at this point
        return records?.sort((a, b) => a.mileage - b.mileage) ?? [];
    }

    /**
     * Save a new service record for the specified service type.
     * 
     * @param serviceType to save the new record for
     * @param record to save
     */
    public saveRecordForServiceType(record: ServiceRecord): void {
        let records = this.cacheService.getItem<ServiceRecord[]>(record.type);

        if (records) {
            records.push(record);

        } else {
            records = [record];
        }

        this.cacheService.setItem(record.type, records);
    }

    /**
     * Edit the value for an existing service record
     * 
     * @param record 
     */
    public editRecord(record: ServiceRecord): void {
        let records = this.cacheService.getItem<ServiceRecord[]>(record.type);

        if (records) {
            const idx = records.findIndex((serviceRecord) => serviceRecord.uuid === record.uuid);

            if (idx > -1) {
                records[idx] = record;
            }

        } else {
            records = [];
        }

        this.cacheService.setItem(record.type, records);
    }

    /**
     * Delete an existing service record
     * 
     * @param record to delete
     */
    public deleteRecord(record: ServiceRecord): void {
        let records = this.cacheService.getItem<ServiceRecord[]>(record.type);

        if (records) {
            const idx = records.findIndex((serviceRecord) => serviceRecord.uuid === record.uuid);

            if (idx > -1) {
                records.splice(idx, 1);
            }

        } else {
            records = [];
        }

        this.cacheService.setItem(record.type, records);
    }
}