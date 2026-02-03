import { ServiceRecord } from "./service-record";

export enum ServiceType {
    AirFilter = "Air Filter",
    PollenFilter = "Pollen Filter",
    OilAndOilFilter = "Oil + Oil Filter",
    FuelFilter = "Fuel Filter",
    SparkPlugs = "Spark Plugs",
    Coolant = "Coolant",
    BrakeFluid = "Brake Fluid",
    GearboxFluid = "Gearbox Fluid",
    DifferentialOil = "Differential Oil",
    AirConditioning = "Air Conditioning",
    Tyres = "Tyres",
    Brakes = "Brakes"
}

export interface Service {
    id: number,
    type: ServiceType,
    interval: ServiceInterval,
    records: ServiceRecord[]
}

interface ServiceInterval {
    mileage: number,
    months: number,
}
