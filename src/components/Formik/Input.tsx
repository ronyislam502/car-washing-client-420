import React from "react";
import { Field } from "formik";

interface InputProps {
  name: string;
  label?: string;
  type?: string;
  value?: string;
  readOnly?: boolean;
  placeholder?: string;
  defaultValue?: string | number;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  type = "text",
  readOnly = false,
  placeholder,
  defaultValue,
  required = false,
}) => {
  return (
    <div className="flex flex-col flex-grow font-publicSans lg:w-auto w-full">
      {label && (
        <label htmlFor={name} className="font-medium mb-2">
          {label}
        </label>
      )}
      <Field
        defaultValue={defaultValue}
        readOnly={readOnly}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className={`border rounded-md p-3 focus-visible:outline-0 read-only:bg-slate-100 `}
      />
    </div>
  );
};

export default Input;
