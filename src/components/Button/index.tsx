import { FC, ReactElement } from "react";
import ArrowIcon from '../../assets/icons/arrow.svg'
import './button.css'

interface Props {
    type?: 'outlined' | 'filled';
    prepIcon?: boolean;
    appendIcon?: boolean;
    children?: ReactElement;
    title?: string;
    loading?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}
 const Button: FC<Props> = ({type='outlined', appendIcon, prepIcon, children, title, disabled, onClick}) => {
  return (
    // Add Loading
    <button onClick={onClick} disabled={disabled} className={`btn ${type === 'outlined' && 'outlined'} ${disabled && 'btn-disabled'}`}>
        {prepIcon && 
            <img className="arrow-right btn-icon" src={ArrowIcon} alt="arrow" width={10} height={10} />
        }
        {title ?
        <p className="btn-title">{title}</p>
        : <span className="btn-title">{children}</span>
        }
        {appendIcon && 
            <img className="btn-icon" src={ArrowIcon} alt="arrow" width={10} height={10} />
        }
    </button>
  )
}
export default Button;