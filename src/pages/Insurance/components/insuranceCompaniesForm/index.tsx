import { FC, useEffect, useState } from "react";
import { TRANSLATIONS } from "../../constants"
import FormsWrapper from "../FormsWrapper"
import SelectBox from "../../../../components/SelectBox";
import InsuransePageSkeleton from "../../../../components/InsuransePageSkeleton";
import Button from "../../../../components/Button";
type UserData = {
  previousInsuranceCompany: string;
  insuranceType: string;
}
type Props = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
  next: () => void;
  back: () => void;
}
const InsuranceCompaniesForm: FC<Props> = ({insuranceType,updateFields, previousInsuranceCompany, next, back}) => {
  const disabled = !previousInsuranceCompany

  const [options, setOptions] = useState()
  const [loading, setLoading] = useState(false)

  async function fetchCompanies() {
    setLoading(true)
    const response = await fetch('https://www.azki.com/api/product/third/companies');
    const companies = await response.json();    
    setOptions(companies)
    setLoading(false)
  }
  
  useEffect(() => {
    fetchCompanies()
  },[])
  if(loading) {
    return (
      <FormsWrapper insuranceType={insuranceType} subtitle={TRANSLATIONS.insuranceCompanyPageSubtitle}>
        <InsuransePageSkeleton count={1} />
      </FormsWrapper>
    )
  }
  return (
    <FormsWrapper insuranceType={insuranceType} subtitle={TRANSLATIONS.insuranceCompanyPageSubtitle}>
      <>
      <SelectBox options={options} title={TRANSLATIONS.previousInsuranceCompany} onSelect={updateFields} value={previousInsuranceCompany} name='previousInsuranceCompany' />
      <div className="steps-btn__container">
        <Button prepIcon title={TRANSLATIONS.backStep} onClick={back} />
        <Button disabled={disabled} appendIcon title={TRANSLATIONS.nextStep} onClick={next} />
      </div>
      </>
    </FormsWrapper>
  )
}

export default InsuranceCompaniesForm;