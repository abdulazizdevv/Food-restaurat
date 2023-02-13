import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../aside/Dashboard/Dashboard";
import { Home } from "./Home/Home";
import { Settings } from "../aside/Settings/Settings";
import { HotDishes } from "../pages/HotDishes/HotDishes";
import { ColdDishes } from "../pages/ColdDishes/ColdDishes";
import { Soup } from "../pages/Soup/Soup";
import { Gril } from "../pages/Gril/Gril";
import { Appetizer } from "../pages/Appetizer/Appetizer";
import { Desert } from "../pages/Desert/Desert";
import { Discount } from "./Discount/Discount";
import { Email } from "./Email/Email";
// import { Notification } from "./Notification/Notification";
// import { LogOut } from "./LogOut/LogOut";

import { NavLink } from "react-router-dom";
import {
  Homecategory,
  Firstimg,
  Logos,
  NavlinkActive,
  AllLi,
  UlAll,
} from "./home.style";
import Logo from "../assets/images/Logo.png";
import HomeImg from "../assets/images/Home/Icon/Line/Iconly/Light outline/Vector.png";
import discount from "../assets/images/discount/Icon/Line/Iconly/Light outline/Vector.png";
import DashboardImg from "../assets/images/dashboard/Icon/Line/Iconly/Light outline/Vector.png";
import EmailImg from "../assets/images/email/Icon/Line/Iconly/Light outline/Vector.png";
import Notification from "../assets/images/notification/Icon/Line/Iconly/Light outline/Vector.png";
import SettingsImg from "../assets/images/settings/Icon/Line/Iconly/Light outline/Vector.png";
import LogOut from "../assets/images/logout/Icon/Line/Iconly/Light outline/Vector.png";

export const Aside = () => {
  return (
    <div>
      <Homecategory>
        <NavLink to="/">
          <Logos src={Logo} alt="logo" />
        </NavLink>
        <UlAll>
          <AllLi>
            <NavlinkActive to="/">
              <Firstimg src={HomeImg} alt="logo" />
            </NavlinkActive>
          </AllLi>
          <AllLi>
            <NavlinkActive to="/discount">
              <Firstimg src={discount} alt="logo" />
            </NavlinkActive>
          </AllLi>
          <AllLi>
            <NavlinkActive to="/dashboard">
              <Firstimg src={DashboardImg} alt="logo" />
            </NavlinkActive>
          </AllLi>
          <AllLi>
            <NavlinkActive to="/email">
              <Firstimg src={EmailImg} alt="logo" />
            </NavlinkActive>
          </AllLi>
          <AllLi>
            <NavlinkActive to="/notification">
              <Firstimg src={Notification} alt="logo" />
            </NavlinkActive>
          </AllLi>
          <AllLi>
            <NavlinkActive to="/setting">
              <Firstimg src={SettingsImg} alt="logo" />
            </NavlinkActive>
          </AllLi>
          <AllLi>
            <NavlinkActive to="/logout">
              <Firstimg src={LogOut} alt="logo" />
            </NavlinkActive>
          </AllLi>
        </UlAll>
      </Homecategory>
    </div>
  );
};
