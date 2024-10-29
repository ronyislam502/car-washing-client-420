import Loader from "../../../../components/shared/Loader";
import SectionTitle from "../../../../components/shared/SectionTitle";
import { useGetAllBookingsQuery } from "../../../../redux/features/booking/bookinApi";
import { TBooking } from "../../../../types/booking.type";

const Bookings = () => {
  const { data: bookings, isLoading } = useGetAllBookingsQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <SectionTitle
        heading="Bookings Overview"
        subHeading="View all customer bookings"
      />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">
                Customer Name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">
                Service Name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">
                Vehicle
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">
                Slot
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {bookings?.data.map((booking: TBooking) => (
              <tr key={booking._id} className="hover:bg-gray-100">
                <td className="px-6 py-4 border-b border-gray-200">
                  {booking?.customer?.name}
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  {booking?.service?.name}
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  {booking?.vehicleBrand} {booking?.vehicleModel}
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  {booking?.slot?.startTime} - {booking?.slot?.endTime}
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  {new Date(booking?.slot?.date).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
