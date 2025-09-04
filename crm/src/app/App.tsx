import { Route, Routes } from "react-router-dom";
import "@shared/styles/index.scss";
import DashBoardPage from "@pages/DashBoardPage/DashBoardPage";
import UsersPage from "@pages/UsersPage/UsersPage";
import RegistrPage from "@pages/RegistrPage/RegistrPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegistrPage />} />
      <Route path="/dash" element={<DashBoardPage />} />
      <Route path="/users" element={<UsersPage />} />s
    </Routes>
  );
}

export default App;
