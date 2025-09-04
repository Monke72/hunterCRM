import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SectionsState {
  activeSection: "dashboard" | "users";
}

const initialState: SectionsState = {
  activeSection: "users",
};

const swapSection = createSlice({
  name: "sections",
  initialState,
  reducers: {
    setActiveSection(state, action: PayloadAction<"dashboard" | "users">) {
      state.activeSection = action.payload;
    },
  },
});

export default swapSection.reducer;
export const { setActiveSection } = swapSection.actions;
