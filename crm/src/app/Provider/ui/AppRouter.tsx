import { Provider } from "react-redux";
import store from "../store/store";
import { BrowserRouter } from "react-router-dom";
import React from "react";

interface IAppRouterProps {
  children: React.ReactNode;
}

const AppRouter = ({ children }: IAppRouterProps) => {
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
};

export default AppRouter;
