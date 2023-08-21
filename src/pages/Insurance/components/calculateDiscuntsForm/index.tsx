import { FC, useEffect, useState } from "react";
import { TRANSLATIONS } from "../../constants"
import FormsWrapper from "../FormsWrapper"
import SelectBox from "../../../../components/SelectBox";
import InsuransePageSkeleton from "../../../../components/InsuransePageSkeleton";
import Button from "../../../../components/Button";

type UserData = {
  thirdPersonDiscuntPercent: string;
  carBodyDiscuntPercent: string;
  insuranceType: string;
}
type Props = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
  setOpen: () => void;
}
const CalculateDiscuntsForm: FC<Props> = ({insuranceType, updateFields, thirdPersonDiscuntPercent, carBodyDiscuntPercent, setOpen}) => {
  const disabled = !thirdPersonDiscuntPercent || !carBodyDiscuntPercent
  const [options, setOptions] = useState()
  const [loading, setLoading] = useState(false)
  async function fetchThirdPersonDiscunt() {
    setLoading(true)
    const response = await fetch('https://www.azki.com/api/product/third/third-discounts');
    const discunts = await response.json();
    setLoading(false)
    setOptions(discunts)
  }
  
  useEffect(() => {
    fetchThirdPersonDiscunt()
  },[])
  console.log('thirdPersonDiscuntPercent', thirdPersonDiscuntPercent)
  if(loading) {
    return (
        <FormsWrapper insuranceType={insuranceType} subtitle={TRANSLATIONS.discuntInfoPageSubtitle}>
            <InsuransePageSkeleton count={2} lastStep />
        </FormsWrapper>
    )
    
  }
  return (
    <FormsWrapper insuranceType={insuranceType} subtitle={TRANSLATIONS.discuntInfoPageSubtitle}>
        <>
            <SelectBox 
              options={options} 
              title={TRANSLATIONS.thirdPersonDiscuntPercent} 
              onSelect={updateFields} value={thirdPersonDiscuntPercent} 
              name='thirdPersonDiscuntPercent' 
            />
            <SelectBox 
              options={options} 
              title={TRANSLATIONS.carBodyDiscuntPercent} 
              onSelect={updateFields} value={carBodyDiscuntPercent} 
              name='carBodyDiscuntPercent' 
            />
            <div className="lastStep">
              <Button disabled={disabled} type="filled" title={TRANSLATIONS.priceCal} onClick={setOpen} />
            </div>
        </>
    </FormsWrapper>
  )
}

export default CalculateDiscuntsForm;