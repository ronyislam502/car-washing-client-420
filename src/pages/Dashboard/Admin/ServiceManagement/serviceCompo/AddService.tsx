import { toast } from "sonner";
import { useCreateServiceMutation } from "../../../../../redux/features/service/serviceApi";
import { TErrorResponse } from "../../../../../types";
import { useState } from "react";
import CustomModal from "../../../../../components/shared/CustomModal";
import FormikForm from "../../../../../components/Formik/FormikForm";
import Input from "../../../../../components/Formik/Input";

type TInitialValues = {
  name: string;
  description: string;
  price: number;
  duration: number;
};

const initialValues: TInitialValues = {
  name: "",
  description: "",
  price: 60,
  duration: 40,
};

const AddService = () => {
  const [isAddServiceModalOpen, setAddServiceModalOpen] = useState(false);

  const [serviceInfo] = useCreateServiceMutation();

  const onSubmit = async (values: TInitialValues) => {
    setAddServiceModalOpen(false);
    const toastId = toast.loading("Service creating");
    try {
      const res = await serviceInfo(values).unwrap();
      toast.success(res.message, { id: toastId, duration: 2000 });
    } catch (error) {
      console.log("error", error);
      const err = error as TErrorResponse;
      toast.error(err?.data?.errorMessages[0].message, {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <div className="flex justify-end mb-5">
      <button
        onClick={() => setAddServiceModalOpen(true)}
        className="btn btn-outline btn-success"
      >
        Add Service
      </button>
      <CustomModal
        isOpen={isAddServiceModalOpen}
        setIsOpen={setAddServiceModalOpen}
      >
        <FormikForm initialValues={initialValues} onSubmit={onSubmit}>
          <Input name="name" label="Name" />
          <Input name="description" label="Description" />
          <Input name="price" label="Price" type="number" />
          <Input name="duration" label="Duration" type="number" />
          <div className="p-6">
            <button
              type="submit"
              className="btn btn-outline btn-success w-full"
            >
              Submit
            </button>
          </div>
        </FormikForm>
      </CustomModal>
    </div>
  );
};

export default AddService;
