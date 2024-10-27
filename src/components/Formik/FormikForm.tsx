/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Formik, FormikHelpers } from "formik";
import { ReactNode } from "react";

interface FormikFormProps<T extends object> {
  initialValues: T;
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void | Promise<any>;
  children: ReactNode;
  className?: string;
}

const FormikForm = <T extends object>({
  initialValues,
  onSubmit,
  className,
  children,
}: FormikFormProps<T>) => {
  return (
    <div className={className}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {() => {
          return <Form className="space-y-4">{children}</Form>;
        }}
      </Formik>
    </div>
  );
};

export default FormikForm;
