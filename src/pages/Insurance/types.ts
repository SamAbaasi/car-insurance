import { CARBODYINSURANCE, THIRDPERSONINSURANCE } from "./constants";

export type InsuranceType = typeof THIRDPERSONINSURANCE | typeof CARBODYINSURANCE
export type FieldsType = {
    insuranceType: string;
    carType: string;
    carYear: string;
    previousInsuranceCompany: string;
    thirdPersonDiscuntPercent: string;
    carBodyDiscuntPercent: string;
}