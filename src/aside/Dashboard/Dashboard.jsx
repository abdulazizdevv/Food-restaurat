import { Aside } from "../aside";
import {
  Dashdiv,
  DashH3,
  EmploreDiv,
  DashP,
  CardDiv,
  Card,
  CardP,
  CardImgs,
  CardVector,
  H3,
  CardBit,
  CardAll,
  P,
  Order,
  OrderP,
  OrderFilter,
  OrderIcons,
  FilerDiv,
  OrderAll,
  AllP,
  AllTxt,
  LineUp,
  AllRepo,
  Report,
  RepoImg,
  RepoP,
  ImgDivs,
  RepoPLong,
  Table,
  TR,
  TH,
  THs,
  TD,
  TDs,
  TDN,
  TDB,
  ALLDash,
  AllBTn,
  MostOrd,
  OrdMenu,
  OrdSelect,
  OrdH,
  TopOrd,
  OrdOpt,
  OrdLine,
  ImgBit,
  MenuImg,
  LineP,
  LineP2,
  TxtDiv,
  BtnMenu,
  OrderType,
  TypeP,
  TypeDiv,
  TypeLine,
  CircleDiv,
  CircleImg,
} from "./dashboard.style";

import { dataDash } from "../../dataDash";
import { data } from "../../dataDash";
import { menu } from "../../dataDash";
import FilerIcon from "../../assets/images/Filter.png";
import circle from "../../assets/images/Circle.png";
import info from "../../assets/images/Info.png";
import "./dash.css";

export const Dashboard = () => {
  const btnFunc = (el) => {
    if (el === "Completed") {
      return "green";
    }
    if (el === "Preparing") {
      return "pink";
    }
    if (el === "Pending") {
      return "yellow";
    }
  };
  const btnProgress = (el) => {
    if (el === "+32.40%") {
      return "benefit";
    }
    if (el === "+2.40%") {
      return "benefit";
    }
    if (el === "-12.40%") {
      return "harm";
    }
  };
  return (
    <div>
      <Aside />
      <Dashdiv>
        <ALLDash>
          <DashH3>Dashboard</DashH3>
          <DashP>Tuesday 2 Feb, 2021</DashP>
          <EmploreDiv></EmploreDiv>
          <CardAll>
            {dataDash.map((dash, index) => {
              return (
                <CardDiv key={index}>
                  <Card>
                    <CardBit>
                      <CardImgs src={dash.img} alt="icon" />
                      <CardP className={btnProgress(dash.progress)}>
                        {dash.progress}
                      </CardP>
                      <CardVector src={dash.imgVector} alt="icon" />
                    </CardBit>
                    <H3>{dash.price}</H3>
                    <P>{dash.title}</P>
                  </Card>
                </CardDiv>
              );
            })}
          </CardAll>
          <OrderAll>
            <Order>
              <OrderP>Order Report</OrderP>
              <OrderFilter>
                <OrderIcons src={FilerIcon} alt="icon" />
                <FilerDiv>Filter Order</FilerDiv>
              </OrderFilter>
            </Order>
            <LineUp></LineUp>
            <Table>
              <TR>
                <TH>Customer</TH>
                <THs>Menu</THs>
                <THs>Total Payment</THs>
                <THs>Status</THs>
              </TR>
              {data.map((datas) => {
                return (
                  <TR>
                    <TD>
                      <ImgDivs>
                        <RepoImg src={datas.img} alt="avatar" />
                        <RepoP>{datas.name}</RepoP>
                      </ImgDivs>
                    </TD>
                    <TDs>{datas.menu}</TDs>
                    <TDN>{datas.payment}</TDN>
                    <TDB>
                      <AllBTn className={btnFunc(datas.status)}>
                        {datas.status}
                      </AllBTn>
                    </TDB>
                  </TR>
                );
              })}
            </Table>
          </OrderAll>
        </ALLDash>
        <MostOrd>
          <OrdMenu>
            <TopOrd>
              <OrdH>Most Ordered</OrdH>
              <OrdSelect>
                <OrdOpt value="today">Today</OrdOpt>
                <OrdOpt value="yesterday">Yesterday</OrdOpt>
                <OrdOpt value="today">Today</OrdOpt>
              </OrdSelect>
            </TopOrd>
            <OrdLine></OrdLine>

            {menu.map((menus) => {
              return (
                <ImgBit>
                  <MenuImg src={menus.img} alt="food" />
                  <TxtDiv>
                    <LineP>{menus.firstTxt}</LineP>
                    <LineP2>{menus.secondTxt}</LineP2>
                  </TxtDiv>
                </ImgBit>
              );
            })}
            <BtnMenu>View All</BtnMenu>
          </OrdMenu>
          <OrderType>
            <TypeDiv>
              <TypeP>Most Type of Order</TypeP>
              <OrdSelect>
                <OrdOpt value="today">Today</OrdOpt>
                <OrdOpt value="yesterday">Yesterday</OrdOpt>
                <OrdOpt value="today">Today</OrdOpt>
              </OrdSelect>
            </TypeDiv>
            <TypeLine></TypeLine>
            <CircleDiv>
              <CircleImg src={circle} alt="circle" />
              <CircleImg src={info} alt="" />
            </CircleDiv>
          </OrderType>
        </MostOrd>
      </Dashdiv>
    </div>
  );
};
