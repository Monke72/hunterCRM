import dashIcon from "@shared/assets/icons/dash-icon.svg";
import userIcon from "@shared/assets/icons/user-icon.svg";
import userAvatarIcon from "@shared/assets/icons/userAvatar-icon.svg";
import strDownIcon from "@shared/assets/icons/srtDown-icon.svg";
import logoIcon from "@shared/assets/icons/hunterCRM.png";
import userLightIcon from "@shared/assets/icons/userLight-icon.svg";
import dashLightIcon from "@shared/assets/icons/keyLight-icon.svg";

import "./Sider.scss";

import { useAppDispatch, useAppSelector } from "@shared/hooks/reduxHook";
import { setActiveSection } from "@features/sectionsSwap/sectionslice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Sider = () => {
  const dispatch = useAppDispatch();
  const section = useAppSelector((state) => state.navSection.activeSection);
  const navigate = useNavigate();

  function swapSection(section: "dashboard" | "users") {
    dispatch(setActiveSection(section));
  }

  useEffect(() => {
    if (section === "dashboard") {
      navigate("/");
    } else if (section === "users") {
      navigate("/users");
    }
  }, [navigate, section]);

  return (
    <div className="sider">
      <div className="sider__top-wrapper">
        <img className="sider__logo" src={logoIcon} alt="" />
        <nav className="sider__nav">
          <ul className="sider__list">
            <li
              onClick={() => swapSection("users")}
              className={`sider__item ${section === "users" ? "active" : ""}`}
            >
              <span className="sider__item-icon">
                <img
                  src={section === "users" ? userLightIcon : userIcon}
                  alt="users"
                />
              </span>
              Dashboard
            </li>

            <li
              onClick={() => swapSection("dashboard")}
              className={`sider__item ${
                section === "dashboard" ? "active" : ""
              }`}
            >
              <span className="sider__item-icon">
                <img
                  src={section === "dashboard" ? dashLightIcon : dashIcon}
                  alt="dashboard"
                />
              </span>
              Разработчики
            </li>
          </ul>
        </nav>
      </div>

      <div className="sider__me">
        <div className="sider__me-wrapper">
          <img className="sider__me-image" src={userAvatarIcon} alt="" />
          <div className="sider__me-info">
            <div className="sider__me-name">Evani</div>
            <span className="sider__me-position">Project-meneger</span>
          </div>
        </div>
        <button className="sider__me-button">
          <img src={strDownIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Sider;
