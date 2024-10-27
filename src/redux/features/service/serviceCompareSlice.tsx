import { TService } from "../../../types";
import { RootState } from "../../store";

import { createSlice } from "@reduxjs/toolkit";

export interface TServiceComparisonStates {
  selectedServices: TService[];
}

const initialState: TServiceComparisonStates = {
  selectedServices: [],
};

const serviceComparisonSlice = createSlice({
  name: "serviceComparison",
  initialState,
  reducers: {
    addServiceToCompare: (state, action) => {
      const service = action.payload;
      if (!state.selectedServices.some((s) => s._id === service._id)) {
        state.selectedServices.push(service);
      }
    },
    removeServiceFromCompare: (state, action) => {
      state.selectedServices = state.selectedServices.filter(
        (service) => service._id !== action.payload
      );
    },
    clearComparisonList: (state) => {
      state.selectedServices = [];
    },
  },
});

export const {
  addServiceToCompare,
  removeServiceFromCompare,
  clearComparisonList,
} = serviceComparisonSlice.actions;

export default serviceComparisonSlice.reducer;

export type ServiceComparisonState = typeof initialState; // Export type here

export const useServices = (state: RootState) =>
  state.serviceComparison.selectedServices;
