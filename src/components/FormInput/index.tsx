import { FC, useState } from "react";
import "./formInput.css";
interface Props {
    label: string;
    errorMessage: string;
    onChange: () => void;
    id: number;
    onFocus: () => false | void;
    name: string;
    pattern?: string;
}
const FormInput: FC<Props> = ({ label, errorMessage, onChange, id, onFocus, pattern }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        onChange={onChange}
        onBlur={handleFocus}
        pattern={pattern}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;