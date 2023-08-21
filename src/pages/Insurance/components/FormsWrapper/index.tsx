import { FC, ReactElement } from 'react'
import { THIRDPERSONINSURANCE, TRANSLATIONS } from '../../constants';
interface Props {
    title?: string;
    subtitle?: string;
    children: ReactElement;
    insuranceType?: string;
}
const FormsWrapper: FC<Props> = ({title,subtitle, children, insuranceType}) => {
  const insuranceTitle = insuranceType === THIRDPERSONINSURANCE ? TRANSLATIONS.thirdPersonInsurance : TRANSLATIONS.carBodyInsurance
  return (
    <div>
        <h1>{title || insuranceTitle}</h1>
        {subtitle &&
            <p>{subtitle}</p>
        }
        {children}
    </div>
  )
}

export default FormsWrapper