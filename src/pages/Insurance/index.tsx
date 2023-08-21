import { useMultiStepsForm } from "../../hooks/useMultiStepsForm";
import CalculateDiscuntsForm from "./components/calculateDiscuntsForm";
import InsuranceTypeForm from "./components/insuranceTypesForm";
import VehicleTypesForm from "./components/vehicleTypesForm";
import {THIRDPERSONINSURANCE } from "./constants";
import './insurancePage.css'
import InsuranceCompaniesForm from "./components/insuranceCompaniesForm";
import { useState } from "react";
import { FieldsType } from "./types";
import InsuranceInfoModal from "./components/InsuranceInfoModal";

const initialData = {
    insuranceType: THIRDPERSONINSURANCE,
    carType: '',
    carYear: '',
    previousInsuranceCompany: '',
    thirdPersonDiscuntPercent: '',
    carBodyDiscuntPercent: '',
}
const InsurancePage = () => {
    const [data, setData] = useState(initialData)
    const [open, setOpen] = useState(false)
    function updateFields(fields: Partial<FieldsType>) {
        setData(prev => {
            return {...prev, ...fields}
        })
    } 
    const {step, next, back} = useMultiStepsForm([
        <InsuranceTypeForm nextStep={nextStep} />, 
        <VehicleTypesForm {...data} updateFields={updateFields} next={nextStep} back={backStep} />,
        <InsuranceCompaniesForm {...data} updateFields={updateFields} next={nextStep} back={backStep} />,
        <CalculateDiscuntsForm {...data} updateFields={updateFields} setOpen={() => setOpen(true)} />
    ])
    function nextStep () {
        next()
    }
    function backStep () {
        back()
    }
  return (
    <div className="insurancePage">
        {step}
        <InsuranceInfoModal open={open} onClose={()=> setOpen(false)} data={data} />
    </div>
  )
}

export default InsurancePage;