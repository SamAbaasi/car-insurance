import { CARBODYINSURANCE, THIRDPERSONINSURANCE, TRANSLATIONS } from "../../constants"
import FormsWrapper from "../FormsWrapper"
import InsuranceIcon from '../../../../assets/icons/insurance.svg';
import './insuranceTypesForm.css'
import { FC } from "react";
import { InsuranceType } from "../../types";
interface Props {
  nextStep: (type: InsuranceType) => void;
}
const InsuranceTypeForm: FC<Props> = ({nextStep}) => {
  return (
    <FormsWrapper title={TRANSLATIONS.chooseInsurance}>
        <div className="insuranceTypeForm">
            <button className="insurance-btn" onClick={() => nextStep(THIRDPERSONINSURANCE)}>
              <img src={InsuranceIcon} alt="InsuranceIcon" width={40} height={40} />
              <span>{TRANSLATIONS.thirdPersonInsurance}</span>
            </button>
            <button disabled className="insurance-btn mr-4 disabled-btn" onClick={() => nextStep(CARBODYINSURANCE)}>
              <img className="disabled-svg" src={InsuranceIcon} alt="InsuranceIcon" width={40} height={40} />
              <span>{TRANSLATIONS.carBodyInsurance}</span>
            </button>
        </div>
    </FormsWrapper>
  )
}

export default InsuranceTypeForm