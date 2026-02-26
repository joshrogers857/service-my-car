import { ServiceType } from "./service";

export interface ServiceRecord {
    // TODO: this will gain a service_id when API is added
    uuid: string,
    mileage: number,
    date: string,
    type: ServiceType,
}