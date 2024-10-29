import { Field, FieldProps } from "formik";

interface Option {
  label: string;
  value: string;
}

interface RadioButtonsProps {
  label?: string;
  name: string;
  options: Option[];
  checkedStyles?: string;
  type: "radio" | "checkbox";
}

const RadioButtons = ({
  label,
  name,
  options,
  checkedStyles,
  type,
}: RadioButtonsProps) => {
  return (
    <div className="font-publicSans">
      {label && <p className="font-medium mb-2">{label}</p>}
      <div className="flex flex-col gap-y-1">
        <Field name={name}>
          {({ field }: FieldProps) => {
            return options.map((option) => {
              const checkedValue = field?.value === option?.value;
              const selectedValues = field?.value?.includes(option?.value);
              return (
                <div
                  key={option.label}
                  className={`form-control flex items-center gap-x-2 ${
                    checkedValue && checkedStyles
                  }`}
                >
                  <input
                    type={type}
                    id={option?.value}
                    {...field}
                    value={option?.value}
                    checked={type === "radio" ? checkedValue : selectedValues}
                    className={`accent-secondaryColor radio`}
                  />
                  <label
                    htmlFor={option?.value}
                    className={`label flex flex-col items-start cursor-pointer `}
                  >
                    {option?.label}
                  </label>
                </div>
              );
            });
          }}
        </Field>
      </div>
    </div>
  );
};

export default RadioButtons;
