import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import store from "@app/Provider/store/store";
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// Кастомные хуки с типами
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
