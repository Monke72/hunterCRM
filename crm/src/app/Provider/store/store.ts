import { configureStore } from "@reduxjs/toolkit";
import sectionReducer from "@features/sectionsSwap/sectionslice";
import RegReducer from "@features/registration/slice";

const store = configureStore({
  reducer: {
    navSection: sectionReducer,
    reg: RegReducer,
  },
});

export default store;
