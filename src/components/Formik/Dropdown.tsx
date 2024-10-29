import React from "react";

import "./style.css";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  setFieldValue: (
    field: string,
    value: unknown,
    shouldValidate?: boolean
  ) => void;
  name: string;
  label?: string;
  placeholder?: string;
  options: Option[];
  optionsLabel?: string;
  defaultValue?: string;
  prefix?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  setFieldValue,
  name,
  label,
  placeholder,
  options,
  optionsLabel,
  defaultValue,
  prefix,
}) => {
  return (
    <div className="lg:w-auto w-full">
      {label && <p className="font-medium mb-2">{label}</p>}
      <Select
        onValueChange={(value) => {
          setFieldValue(name, value);
        }}
        defaultValue={defaultValue}
      >
        <SelectTrigger
          className={`h-[50px] font-medium gap-x-5 ${prefix}-formik-dropdown formik-dropdown`}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {optionsLabel && <SelectLabel>{optionsLabel}</SelectLabel>}
            {options?.map((item, index) => (
              <SelectItem key={index} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Dropdown;
