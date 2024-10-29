import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

import { FaStar } from "react-icons/fa6";
import { useGetAllReviewsQuery } from "../../redux/features/review/reviewApi";
import SectionTitle from "../../components/shared/SectionTitle";
import { TReview } from "../../types";
import { formatDateToDDMMYYYY } from "../../utils/utils";

const Reviews = () => {
  const { data } = useGetAllReviewsQuery(undefined);
  //   console.log("review", data);

  return (
    <div className="container lg:py-[50px]">
      <SectionTitle
        heading="Customer Reviews"
        subHeading="Discover the experiences of those who have chosen our services"
      />
      <div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          {data?.data?.result?.map((item: TReview) => {
            return (
              <div
                key={item?._id}
                className="space-y-2 bg-blue-100 p-5 rounded-md"
              >
                <p className="font-medium text-lg">{item?.name}</p>
                <p className="flex items-center gap-x-1 font-medium">
                  Rated: {item?.rating} <FaStar className="text-primary" />
                </p>
                <p className="flex items-center gap-x-1 font-medium ">
                  Date: {formatDateToDDMMYYYY(item.createdAt)}
                </p>
                <p className="flex items-center text-xl font-medium">
                  <RiDoubleQuotesL /> {item?.feedback} <RiDoubleQuotesR />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
