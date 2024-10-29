import { useState } from "react";
import { useGetAllServicesQuery } from "../../redux/features/service/serviceApi";
import { useAppDispatch } from "../../redux/hooks";
import { TService } from "../../types";
import { addServiceToCompare } from "../../redux/features/service/serviceCompareSlice";
import { toast } from "sonner";
import Loader from "../../components/shared/Loader";
import SectionTitle from "../../components/shared/SectionTitle";
import { Form, Formik, FormikProps } from "formik";
import Dropdown from "../../components/Formik/Dropdown";
import Input from "../../components/Formik/Input";
import {
  maxDurationOptions,
  minDurationOptions,
  sortOptions,
} from "../../utils/list";
import { Link } from "react-router-dom";
import { MdAddCircleOutline } from "react-icons/md";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";

interface TSearchFormValues {
  keyword: string;
  sort: "asc" | "desc";
  minDuration: string;
  maxDuration: string;
}

const initialValues: TSearchFormValues = {
  keyword: "",
  sort: "asc",
  minDuration: "",
  maxDuration: "",
};

const Services = () => {
  const [searchValues, setSearchValues] = useState(initialValues);
  const { data, isLoading } = useGetAllServicesQuery(searchValues);
  console.log(data);
  const dispatch = useAppDispatch();
  const handleAddServiceToCompare = (service: TService) => {
    dispatch(addServiceToCompare(service));
    toast.success("Service added to the compare page");
  };

  const onSubmit = (values: TSearchFormValues) => {
    console.log(values);
    setSearchValues(values);
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="container">
      <SectionTitle
        heading="What We Offer"
        subHeading="Delivering quality services across a wide range of specialties"
      />
      <div>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ setFieldValue }: FormikProps<TSearchFormValues>) => {
            return (
              <Form className="flex lg:flex-row flex-col items-center gap-5 mb-10 w-full">
                <Dropdown
                  name="sort"
                  options={sortOptions}
                  setFieldValue={setFieldValue}
                  placeholder="Sort by price"
                  optionsLabel="Sort by price"
                  prefix="service-price"
                />
                <Dropdown
                  name="minDuration"
                  options={minDurationOptions}
                  setFieldValue={setFieldValue}
                  placeholder="Minimum duration"
                  optionsLabel="Minimum duration"
                  prefix=""
                />
                <Dropdown
                  name="maxDuration"
                  options={maxDurationOptions}
                  setFieldValue={setFieldValue}
                  placeholder="Maximum duration"
                  optionsLabel="Maximum duration"
                />
                <Input name="keyword" placeholder="query" />
                <button className="h-[50px] lg:w-[150px] w-full bg-primary text-white font-semibold rounded-md">
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
        {data?.data.map((item: TService) => {
          return (
            <div
              key={item?._id}
              className="bg-primary-foreground/5 p-5 rounded-md"
            >
              <h3 className="text-xl font-semibold mb-2">{item?.name}</h3>
              <p className="">{item?.description.slice(0, 50)}</p>
              <div className="flex gap-x-5 w-full mt-2">
                <p className="font-medium">Duration: {item?.duration}</p>
                <p className="font-medium flex items-center">
                  Price: {item?.price} <BsCurrencyDollar />{" "}
                </p>
              </div>
              <div className="flex  justify-between">
                <Link
                  to={`/service-details/${item?._id}`}
                  className="flex flex-row items-center text-primary-foreground font-semibold rounded w-[180px] mt-2"
                >
                  Learn more <MdOutlineDoubleArrow className="mt-1 ms-1" />
                </Link>
                <button
                  onClick={() => handleAddServiceToCompare(item)}
                  className="mt-2 flex items-center gap-x-2 font-medium text-primary-foreground hover:text-primary"
                >
                  Compare <MdAddCircleOutline className="mt-1" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
