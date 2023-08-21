import { FC } from "react";
import Modal from 'react-modal';
import {THIRDPERSONINSURANCE, TRANSLATIONS } from "../../constants";
import Button from "../../../../components/Button";
import './InsuranceInfoModal.css';
import { FieldsType } from "../../types";
type Props = UserData & {
    open: boolean;
    onClose: () => void;
}
type UserData = {
  data: FieldsType
}
Modal.setAppElement('#root');
const KeyValueCol = ({title, value}: {title: string; value: string}) => {
  return (
    <div className="keyValueCol">
      <h3 className="keyValueCol--title">{title}</h3>
      <p className="keyValueCol--value">{value}</p>
    </div>
  )
}
const InsuranceInfoModal: FC<Props> = ({open, onClose, data}) => {
  const insuranceTypeTr: string = data.insuranceType === THIRDPERSONINSURANCE ? TRANSLATIONS.insuranceType.thirdPersonInsurance : TRANSLATIONS.insuranceType.carBodyInsurance
  return (
    <Modal
        isOpen={open}
        onRequestClose={onClose}
        contentLabel="InsuranceInfoModal"
        className='modal'
      >
        <div className="modal-header">
          <h2>{TRANSLATIONS.insuranceModalTitle}</h2>
          <Button type="filled" onClick={onClose} title={TRANSLATIONS.close}/>
        </div>
        <div>
            <KeyValueCol title={TRANSLATIONS.insuranceType.title} value={insuranceTypeTr} />
            <KeyValueCol title={TRANSLATIONS.carType} value={data.carType || ''} />
            <KeyValueCol title={TRANSLATIONS.carYear} value={data.carYear || ''} />
            <KeyValueCol title={TRANSLATIONS.previousInsuranceCompany} value={data.previousInsuranceCompany || ''} />
            <KeyValueCol title={TRANSLATIONS.thirdPersonDiscuntPercent} value={data.thirdPersonDiscuntPercent || ''} />
            <KeyValueCol title={TRANSLATIONS.carBodyDiscuntPercent} value={data.carBodyDiscuntPercent || ''} />
          </div>
      </Modal>
  )
}

export default InsuranceInfoModal