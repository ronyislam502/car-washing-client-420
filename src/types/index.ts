/* eslint-disable @typescript-eslint/no-explicit-any */
export interface TErrorMessage {
  path: string;
  message: string;
}

export interface TErrorResponse {
  status: number;
  data: {
    errorMessages: any;
    success: boolean;
    message: string;
    errorSources: TErrorMessage[];
  };
}

export interface TSlot {
  _id: string;
  service: string;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
}

export const userRole = {
  ADMIN: "admin",
  USER: "user",
};

export type TSlotWithService = {
  _id: string;
  service: {
    _id: string;
    name: string;
    description: string;
    price: number;
    duration: number;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  date: string;
  startTime: string;
  endTime: string;
  isBooked: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
};

export interface TService {
  _id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface TReview {
  _id: string;
  email: string;
  name: string;
  rating: number;
  feedback: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type TUserResponse = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TLabelValue = {
  label: string;
  value: string;
};
