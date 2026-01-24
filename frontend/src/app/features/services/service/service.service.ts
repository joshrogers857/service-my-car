import { Injectable } from "@angular/core";
import { Service, ServiceType } from "../model/service";

@Injectable({
  providedIn: 'root',
})
export class ServiceService {

    public getServices(): Service[] {
        return this.services;
    }

    // TODO: this data source would be replaced with a call to our API once implemented
    private services: Service[] = [
        {
            type: ServiceType.OilAndOilFilter,
            interval: {
                mileage: 7000,
                months: 12
            },
            records: [
                {
                    mileage: 6890,
                    date: new Date('2025-01-01')
                },
            ],
        },
        {
            type: ServiceType.Coolant,
            interval: {
                mileage: 60000,
                months: 84
            },
            records: [],
        },
    ];
}