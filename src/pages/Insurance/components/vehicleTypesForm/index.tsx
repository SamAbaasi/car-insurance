import { FC, useEffect, useState } from "react";
import { TRANSLATIONS, carYearOptions } from "../../constants"
import FormsWrapper from "../FormsWrapper"
import SelectBox from "../../../../components/SelectBox";
import InsuransePageSkeleton from "../../../../components/InsuransePageSkeleton";
import Button from "../../../../components/Button";
type UserData = {
  carType: string;
  carYear: string;
  insuranceType: string;
}
type Props = UserData & {
  updateFields: (fields: Partial<UserData>) => void,
  next: () => void;
  back: () => void;
}
const VehicleTypesForm: FC<Props> = ({insuranceType, carType, carYear, updateFields, back, next}) => {
  const disabled = !carYear || !carType

  const [options, setOptions] = useState()
  const [loading, setLoading] = useState(false)
  async function fetchVehicles() {
    setLoading(true)
    const response = await fetch('https://www.azki.com/api/product/vehicle/types');
    const vehicles = await response.json();
    setOptions(vehicles)
    setLoading(false)
  }
  
  useEffect(() => {
    fetchVehicles()
  },[])

  if(loading) {
    return (
      <FormsWrapper insuranceType={insuranceType} subtitle={TRANSLATIONS.carTypePageSubtitle}>
        <InsuransePageSkeleton count={2} />
      </FormsWrapper>
    )
  }
  return (
    <FormsWrapper insuranceType={insuranceType} subtitle={TRANSLATIONS.carTypePageSubtitle}>
        <>
          <SelectBox className='col-2 ml-2' options={options} title={TRANSLATIONS.carType} onSelect={updateFields} value={carType} name='carType' />
          <SelectBox className='col-2' options={carYearOptions} title={TRANSLATIONS.carYear} onSelect={updateFields} value={carYear} name='carYear' />
            <div className="steps-btn__container">
                <Button prepIcon title={TRANSLATIONS.backStep} onClick={back} />
                <Button disabled={disabled} appendIcon title={TRANSLATIONS.nextStep} onClick={next} />
            </div>
        </>
    </FormsWrapper>
  )
}

export default VehicleTypesForm;