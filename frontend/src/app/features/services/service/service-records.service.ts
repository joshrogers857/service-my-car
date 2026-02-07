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

        return records ?? [];
    }

    /**
     * Save a new service record for the specified service type.
     * 
     * @param serviceType to save the new record for
     * @param record to save
     */
    public saveRecordForServiceType(serviceType: ServiceType, record: ServiceRecord): void {
        let records = this.cacheService.getItem<ServiceRecord[]>(serviceType);

        if (records) {
            records.push(record);

        } else {
            records = [record];
        }

        this.cacheService.setItem(serviceType, records);
    }
}