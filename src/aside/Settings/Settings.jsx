import { Aside } from "../aside";
import {
  Setting,
  ProducNav,
  ProducNavList,
  ProducNavListItem,
  ProducNavTitle,
  NavLinkCard,
  NavLinkHeading,
  NavLinkPr,
  NavLinkImg,
  NavLinkCardDiv,
} from "./setting.style";

import NavlinkImg1 from "../../assets/images/Heart.png";
import NavlinkImg3 from "../../assets/images/settingsimg3.png";
import NavlinkImg2 from "../../assets/images/Group.png";
import NavlinkImg4 from "../../assets/images/Notification.svg";
import NavlinkImg5 from "../../assets/images/Unlock.png";
import NavlinkImg6 from "../../assets/images/InfoCircle.png";
import { Outlet } from "react-router-dom";
export const Settings = () => {
  return (
    <Setting>
      <Aside />
      <ProducNav>
        <ProducNavTitle>Settings</ProducNavTitle>
        <ProducNavList>
          <ProducNavListItem>
            <NavLinkCard to="/setting/settings">
              <NavLinkImg src={NavlinkImg1} alt="heartimg" />
              <NavLinkCardDiv>
                <NavLinkHeading>Appereance</NavLinkHeading>
                <NavLinkPr>Dark and Light mode, Font size</NavLinkPr>
              </NavLinkCardDiv>
            </NavLinkCard>
          </ProducNavListItem>
          <ProducNavListItem>
            <NavLinkCard to="/setting/yourRestaurant">
              <NavLinkImg src={NavlinkImg2} alt="heartimg" />
              <NavLinkCardDiv>
                <NavLinkHeading>Your Restaurant</NavLinkHeading>
                <NavLinkPr>Dark and Light mode, Font size</NavLinkPr>
              </NavLinkCardDiv>
            </NavLinkCard>
          </ProducNavListItem>
          <ProducNavListItem>
            <NavLinkCard to="/setting/products">
              <NavLinkImg src={NavlinkImg3} alt="heartimg" />
              <NavLinkCardDiv>
                <NavLinkHeading>Products Management</NavLinkHeading>
                <NavLinkPr>Manage your product, pricing, etc</NavLinkPr>
              </NavLinkCardDiv>
            </NavLinkCard>
          </ProducNavListItem>
          <ProducNavListItem>
            <NavLinkCard to="/setting/notifications">
              <NavLinkImg src={NavlinkImg4} alt="heartimg" />
              <NavLinkCardDiv>
                <NavLinkHeading>Notifications</NavLinkHeading>
                <NavLinkPr>Customi/settingze your notifications</NavLinkPr>
              </NavLinkCardDiv>
            </NavLinkCard>
          </ProducNavListItem>
          <ProducNavListItem>
            <NavLinkCard to="/setting/security1">
              <NavLinkImg src={NavlinkImg5} alt="heartimg" />
              <NavLinkCardDiv>
                <NavLinkHeading>Security</NavLinkHeading>
                <NavLinkPr>Configure Password, PIN, etc</NavLinkPr>
              </NavLinkCardDiv>
            </NavLinkCard>
          </ProducNavListItem>
          <ProducNavListItem>
            <NavLinkCard to="/setting/security2">
              <NavLinkImg src={NavlinkImg5} alt="heartimg" />
              <NavLinkCardDiv>
                <NavLinkHeading>Security</NavLinkHeading>
                <NavLinkPr>Configure Password, PIN, etc</NavLinkPr>
              </NavLinkCardDiv>
            </NavLinkCard>
          </ProducNavListItem>
          <ProducNavListItem>
            <NavLinkCard to="/setting/about">
              <NavLinkImg src={NavlinkImg6} alt="heartimg" />
              <NavLinkCardDiv>
                <NavLinkHeading>About Us</NavLinkHeading>
                <NavLinkPr>Find out more about Posly</NavLinkPr>
              </NavLinkCardDiv>
            </NavLinkCard>
          </ProducNavListItem>
        </ProducNavList>
      </ProducNav>
      <Outlet/>
    </Setting>
  );
};
