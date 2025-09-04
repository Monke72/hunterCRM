import "./ChoisePage.scss";
import Card from "@shared/ui/card/Card";
import devIcon from "@icons/developer-icon.svg";
import managerIcon from "@icons/manager-icon.svg";
import { useDispatch } from "react-redux";
import { setRegSection } from "@features/registration/slice";
import { useNavigate } from "react-router-dom";

const ChoisePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function choise(item: "manager" | "dev" | "") {
    dispatch(setRegSection(item));
    navigate(item);
  }
  return (
    <div className="choise">
      <h1 className="choise__title">Давайте узнаем о ваших целях</h1>

      <div className="cards__wrapper">
        <Card
          onClick={() => choise("manager")}
          image={managerIcon}
          title={"Менеджер"}
          description={"Хотите отследить изменения"}
        />
        <Card
          onClick={() => choise("dev")}
          image={devIcon}
          title={"Разработчик"}
          description={"Хотите заполнить форму для рассмотрения"}
        />
      </div>
    </div>
  );
};

export default ChoisePage;
