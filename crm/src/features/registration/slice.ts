import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RegSectionsState {
  activeSection: "reg" | "manager" | "dev";
}

const initialState: RegSectionsState = {
  activeSection: "reg",
};

const registrSlice = createSlice({
  name: "sections",
  initialState,
  reducers: {
    setRegSection(state, action: PayloadAction<"reg" | "manager" | "dev">) {
      state.activeSection = action.payload;
    },
  },
});

export default registrSlice.reducer;
export const { setRegSection } = registrSlice.actions;
