import { Route, Routes } from "react-router-dom";
import "@shared/styles/index.scss";
import DashBoardPage from "@pages/DashBoardPage/DashBoardPage";
import UsersPage from "@pages/UsersPage/UsersPage";
import ChoisePage from "@pages/ChoisePage/ChoisePage";
import DevRegPage from "@pages/DevRegPage/DevRegPage";
import ManagerRegPage from "@pages/ManagerRegPage/ManagerRegPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChoisePage />} />
      <Route path="/dev" element={<DevRegPage />} />
      <Route path="/manager" element={<ManagerRegPage />} />
      <Route path="/dash" element={<DashBoardPage />}></Route>
      <Route path="/users" element={<UsersPage />} />
    </Routes>
  );
}

export default App;
