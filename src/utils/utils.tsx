import { TLabelValue, TService } from "../types";
import { TBooking } from "../types/booking.type";

export const formatDateToDDMMYYYY = (isoDateString: string): string => {
  // Create a Date object from the ISO date string
  const date = new Date(isoDateString);

  // Extract day, month, and year from the Date object
  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed
  const year = date.getUTCFullYear();

  // Return the date in DD-MM-YYYY format
  return `${day}-${month}-${year}`;
};

export const servicesToDropdownOption = (
  services: TService[]
): TLabelValue[] => {
  return services.map((service) => ({
    label: service.name,
    value: service._id,
  }));
};

export const filterUpcomingBookings = (
  bookings: TBooking[]
): TBooking | null => {
  const now = new Date();

  const bookingList = Array.isArray(bookings) ? bookings : [];

  const upcomingBookings = bookingList
    .filter((booking) => {
      if (!booking.slot?.date || !booking.slot?.startTime) {
        console.warn("Warning: Missing date or startTime in booking:", booking);
        return false;
      }
      // Combine date and time into a single string
      const [year, month, day] = booking.slot.date.split("T")[0].split("-");
      const [hours, minutes] = booking.slot.startTime.split(":");

      // Create a new Date object with the combined date and time
      const bookingDateTime = new Date(
        Number(year),
        Number(month) - 1,
        Number(day),
        Number(hours),
        Number(minutes)
      );

      // Return true if the bookingDateTime is greater than or equal to now
      return bookingDateTime >= now;
    })
    .sort((a, b) => {
      const [yearA, monthA, dayA] = a.slot.date.split("T")[0].split("-");
      const [hoursA, minutesA] = a.slot.startTime.split(":");
      const dateTimeA = new Date(
        Number(yearA),
        Number(monthA) - 1,
        Number(dayA),
        Number(hoursA),
        Number(minutesA)
      );

      const [yearB, monthB, dayB] = b.slot.date.split("T")[0].split("-");
      const [hoursB, minutesB] = b.slot.startTime.split(":");
      const dateTimeB = new Date(
        Number(yearB),
        Number(monthB) - 1,
        Number(dayB),
        Number(hoursB),
        Number(minutesB)
      );

      return dateTimeA.getTime() - dateTimeB.getTime();
    });

  // Return the first upcoming booking if it exists
  return upcomingBookings.length > 0 ? upcomingBookings[0] : null;
};

export const getTargetDateTime = (date: string, startTime?: string): Date => {
  if (!startTime) {
    console.error("Error: startTime is undefined");
    return new Date(date); // Return the date without setting time if startTime is undefined
  }

  const [hours, minutes] = startTime.split(":").map(Number);
  const targetDate = new Date(date);
  targetDate.setHours(hours, minutes, 0, 0); // Set the time to the startTime
  return targetDate;
};
