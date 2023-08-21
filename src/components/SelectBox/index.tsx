import { FC } from "react";
import './selectBox.css'
type option = {
    id: number;
    title: string;
}
interface Props {
    title?: string;
    onSelect: (e: any) => void;
    options: option[] | undefined,
    value: string;
    name: string;
    className?: string;
}
 const SelectBox: FC<Props> = ({onSelect, title, value, name, options, className}) => {
    function onchange (e: { target: { value: any; }; }) {
        onSelect({[name]: e.target.value})
    }
  return (
    // Add Loading
    <select className={`selectbox ${className}`} value={value} onChange={onchange}>
        <option value=''>{title}</option>
        {options?.map((option) => (
            <option key={option.id} value={option.title}>{option.title}</option>
        ))}
    </select>
)
}
export default SelectBox;