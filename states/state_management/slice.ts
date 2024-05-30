import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface IStateManagement {
  text: string;
  number: number;
}

// Define the initial state using that type
const initialState: IStateManagement = {
  text: "",
  number: 0,
};

export const stateManagement = createSlice({
  name: "example",
  initialState,
  reducers: {
    updateText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    updateNumber: (state, action: PayloadAction<number>) => {
      state.number += action.payload;
    },
  },
});

export const { updateText, updateNumber } = stateManagement.actions;

export default stateManagement.reducer;
