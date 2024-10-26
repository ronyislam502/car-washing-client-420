/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

interface FormikRatingProps {
  name: string;
  label?: string;
  value: number;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

const FormikRating: FC<FormikRatingProps> = ({
  name,
  label,
  value,
  setFieldValue,
}) => {
  return (
    <div>
      {label && (
        <label htmlFor={name} className="font-medium mb-2">
          {label}
        </label>
      )}
      <Rating
        id={name}
        style={{ maxWidth: 230 }}
        value={value}
        onChange={(e: any) => setFieldValue(name, e)}
      />
    </div>
  );
};

export default FormikRating;
