export interface Service {
    type: ServiceType,
    interval: ServiceInterval,
}

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

interface ServiceInterval {
    mileage: number,
    months: number,
}
