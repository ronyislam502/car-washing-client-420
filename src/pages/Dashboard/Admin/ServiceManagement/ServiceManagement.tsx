import { toast } from "sonner";
import {
  useDeleteServiceMutation,
  useGetServicesQuery,
  useUpdateServiceMutation,
} from "../../../../redux/features/service/serviceApi";
import { TErrorResponse, TService } from "../../../../types";
import AddService from "./serviceCompo/AddService";
import CustomModal from "../../../../components/shared/CustomModal";
import { useState } from "react";
import Loader from "../../../../components/shared/Loader";
import FormikForm from "../../../../components/Formik/FormikForm";
import Input from "../../../../components/Formik/Input";

type TInitialValues = {
  name: string;
  description: string;
  price: number;
  duration: number;
};

const ServiceManagement = () => {
  const [isServiceDeleteModalOpen, setServiceDeleteModalOpen] = useState(false);
  const [isServiceUpdateModalOpen, setServiceUpdateModalOpen] = useState(false);
  const [serviceId, setServiceId] = useState("");
  const [serviceDetails, setServiceDetails] = useState<TService | null>(null);
  const { data: services, isLoading } = useGetServicesQuery(undefined);

  const [deleteService] = useDeleteServiceMutation();
  const [serviceData] = useUpdateServiceMutation();

  const handleServiceDelete = async (_id: string) => {
    setServiceDeleteModalOpen(false);
    const toastId = toast.loading("Service deleting");
    try {
      const res = await deleteService(_id).unwrap();
      console.log(res);
      toast?.success("Service deleted", { id: toastId });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { id: toastId });
    }
  };

  const serviceUpdateInitialValues = {
    name: serviceDetails?.name || "",
    description: serviceDetails?.description || "",
    price: serviceDetails?.price || 0,
    duration: serviceDetails?.duration || 0,
  };

  const handleServiceUpdate = async (values: TInitialValues) => {
    console.log(values);
    if (!serviceDetails) {
      // Handle the case where serviceDetails is null
      toast.error("Service details are not available.", { duration: 2000 });
      return;
    }
    setServiceUpdateModalOpen(false);
    const toastId = toast.loading("Service updating");
    try {
      const response = await serviceData({
        serviceData: values,
        id: serviceDetails._id,
      }).unwrap();
      console.log(response);
      toast.success(response.message, { id: toastId, duration: 2000 });
    } catch (error) {
      console.log(error);
      const err = error as TErrorResponse;
      toast.error(err?.data?.errorMessages[0].message, {
        id: toastId,
        duration: 2000,
      });
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <AddService />
      <div className="overflow-x-auto px-6">
        <table className="table table-zebra">
          <thead>
            <tr className="font-bold text-2xl text-black text-center">
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Duration(mins)</th>
              <th>EDIT</th>
              <th>Action</th>
            </tr>
          </thead>
          <hr />
          <tbody className="text-black">
            {services?.data?.map((service: TService, index: number) => (
              <tr key={service._id} className="text-center">
                <th>{index + 1}</th>
                <td>{service?.name}</td>
                <td>{service?.description}</td>
                <td>$ {service?.price}</td>
                <td>{service.duration}</td>
                <td>
                  <button
                    onClick={() => {
                      setServiceDetails(service);
                      setServiceUpdateModalOpen(true);
                    }}
                    className="btn btn-outline btn-accent btn-sm"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      setServiceDeleteModalOpen(true);
                      setServiceId(service._id);
                    }}
                    className="btn btn-outline btn-error btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* update service modal */}
      <CustomModal
        isOpen={isServiceUpdateModalOpen}
        setIsOpen={setServiceUpdateModalOpen}
      >
        <FormikForm
          initialValues={serviceUpdateInitialValues}
          onSubmit={handleServiceUpdate}
        >
          <Input name="name" label="Name" />
          <Input name="description" label="Description" />
          <Input name="price" label="Price" type="number" />
          <Input name="duration" label="Duration" type="number" />
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-outline btn-success w-full"
            >
              Submit
            </button>
          </div>
        </FormikForm>
      </CustomModal>
      {/* update service modal */}
      {/* delete service */}
      <CustomModal
        isOpen={isServiceDeleteModalOpen}
        setIsOpen={setServiceDeleteModalOpen}
      >
        <div className="flex flex-col items-center w-full p-6">
          <h2 className="text-2xl font-semibold">Are you sure?</h2>
          <h3 className="text-4xl font-medium">You want to delete it?</h3>
          <div className="flex justify-between mt-5 w-full px-6">
            <button
              onClick={() => setServiceDeleteModalOpen(false)}
              className="btn btn-outline btn-warning"
            >
              Cancel
            </button>
            <button
              onClick={() => handleServiceDelete(serviceId)}
              className="btn btn-outline btn-error"
            >
              Delete
            </button>
          </div>
        </div>
      </CustomModal>
      {/* delete service */}
    </div>
  );
};

export default ServiceManagement;
