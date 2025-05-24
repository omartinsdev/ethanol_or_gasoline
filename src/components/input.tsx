import type { ChangeEventHandler } from "react";

import "./input.css";

interface IInputProps {
  inputClass: string;
  inputName: string;
  inputText: string;
  inputType: string;
  inputValue: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({
  inputClass,
  inputName,
  inputText,
  inputType,
  inputValue,
  onChange,
}: IInputProps) => {
  return (
    <input
      type={inputType}
      className={inputClass}
      name={inputName}
      id={inputName}
      placeholder={inputText}
      value={inputValue}
      onChange={onChange}
      min="1"
      step="0.01"
      required
    />
  );
};
