type TCustomer = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
};

type TService = {
  _id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  isDeleted: boolean;
};

type TSlot = {
  _id: string;
  service: string;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: string;
};

export type TBooking = {
  _id: string;
  customer: TCustomer;
  service: TService;
  slot: TSlot;
  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
