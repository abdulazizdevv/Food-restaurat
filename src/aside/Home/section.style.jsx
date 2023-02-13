import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const AllMain = styled.div`
  /* height: 884px; */
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 1px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #252836;
    border-radius: 10px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #1f1d2b;
    border-radius: 10px;
  }
  /* Handle on hover */
`;

export const FirstDiv = styled.div`
  margin-left: 110px;
  display: flex;
`;

export const AllCards = styled.div`
  width: 840px;
`;

export const Flexbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const HeadTxt = styled.h2`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 140%;
  color: #ffffff;
`;
export const TextL = styled.div`
  padding: 5px;
`;

export const PageTxt = styled.p`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #e0e6e9;
`;

export const InputR = styled.div`
  padding: 14px;
  gap: 8px;
  display: flex;
  width: 220px;
  height: 48px;
  background: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
`;

export const Universal = styled.div``;

export const InputS = styled.input`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  background: #2d303e;
  border: none;
  outline: none;
  color: #abbbc2;
`;

export const SearchImg = styled.img`
  width: 20px;
`;

export const NavLinks = styled(NavLink)`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  text-decoration: none;
  position: relative;
  color: #ffffff;
  &.active {
    color: #ea7c69;
  }
  &::after {
    content: "";
    position: absolute;
    height: 3px;
    border-radius: 5px;
    width: 0%;
    left: 0;
    color: #ea7c69;
    background: #ea7c69;
  }
  &.active::after {
    margin-top: 32px;
    z-index: 99;
    width: 100%;
  }
`;
export const NavLinksNext = styled(NavLink)`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  text-decoration: none;
  margin-left: 32px;
  color: #ffffff;
  position: relative;
  &.active {
    color: #ea7c69;
  }
  &::after {
    content: "";
    position: absolute;
    border-radius: 5px;

    height: 3px;
    width: 0%;
    left: 0;
    /* bottom: 0; */
    background: #ea7c69;
    z-index: 99;
  }
  &.active::after {
    margin-top: 32px;
    width: 100%;
  }
`;

export const AllLinks = styled.div`
  display: flex;
  margin-top: 24px;
`;

export const Line = styled.div`
  position: relative;
  width: 797px;
  height: 0px;
  margin-top: 13px;
  border: 1px solid #4c5788;
`;

export const Main = styled.div`
  margin-top: 47px;
  /* width: 681px; */
  background-color: #252836;
  height: 100%;
`;
export const Header2 = styled.h6`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #fff;
`;

export const SelectAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SelectType = styled.select`
  width: 100px;
  height: 48px;
  color: #fff;
  padding: 5px;
  background: #1f1d2b;
  border: 1px solid #393c49;
  border-radius: 8px;
`;

export const SelectOpt = styled.option`
  color: #fff;
  padding: 5px;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 68px;
  margin-left: 2px;
`;
export const Card = styled.div`
  background: #1f1d2b;
  border-radius: 16px;
  height: 226px;
  width: 192px;
  text-align: center;
  position: relative;
  margin-bottom: 58px;
`;

export const CardImg = styled.img`
  position: absolute;
  left: 15%;
  right: 11.14%;
  bottom: 55.55%;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  display: inline-block;
  animation: rotate 5s linear infinite;
  font-size: 1.2rem;
`;

export const CardP = styled.p`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  color: #ffffff;
  padding-top: 114px;
`;

export const CardSecondP = styled.p`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #abbbc2;
  margin-top: 5px;
`;

export const LeftBit = styled.div`
  /* width: 550px; */
  margin-left: 5px;
  padding: 24px;
  background: #1f1d2b;
  border-radius: 8px;
`;

export const Head6 = styled.h6`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #ffffff;
`;

export const BtnGroup = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 10px;
`;

export const Btn = styled.button`
  padding: 7px 12px;
  cursor: pointer;
  background: #1f1d2b;
  border: 1px solid #393c49;
  border-radius: 8px;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #ea7c69;

  &:hover {
    background: #ea7c69;
    color: #fff;
  }
`;

export const TextPlace = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  color: #ffffff;
`;
export const Item = styled.div``;
export const Ltxt = styled.div`
  display: flex;
  gap: 43px;
`;
export const Qtr = styled.p``;

export const LineL = styled.div`
  margin-top: 24px;
  width: 510px;
  height: 0px;
  border: 1px solid #393c49;
`;

export const AddCards = styled.div`
  margin-top: 27.5px;
  display: flex;
  flex-direction: column;
  gap: 27px;
`;
export const InpCard = styled.div`
  position: relative;
`;
export const ImgCard = styled.img`
  width: 45px;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 5px; */
`;

export const Divs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;
export const DivP = styled.div``;

export const Paragraph = styled.p`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  color: #ffffff;
`;
export const ParagraphPrice = styled.p`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 140%;
  color: #abbbc2;
`;

export const BtnCount = styled.button`
  margin-left: 180px;
  padding: 14px 14px 12px;
  gap: 8px;
  width: 48px;
  height: 48px;
  background: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;

  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: #ffffff;
`;

export const PriceP = styled.p`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: #ffffff;
`;

export const InputDiv = styled.div`
  margin-top: 10px;
  padding: 14px 96px 14px 14px;
  width: 437px;
  height: 48px;
  background: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
`;
export const Inputs = styled.input`
  background: #2d303e;
  color: #e0e6e9;
  outline: none;
  border: none;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  width: 250px;
`;

export const Trash = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const TrashBtn = styled.div`
  cursor: pointer;
  padding: 14px 14px 12px;
  width: 48px;
  height: 48px;
  border: none;
  background: #2d303e;
  border: 1px solid #ff7ca3;
  border-radius: 8px;
`;

export const TrashImg = styled.img``;

export const FootL = styled.div`
  /* height: 175px; */
  /* width: 550px;
  margin-left: -25px;
  z-index: 9;
  background: #1f1d2b; */
  /* margin-top: -58px; */
  /* position: absolute; */
`;

export const TxtP = styled.div`
  /* margin-top: 2px; */
  display: flex;
  justify-content: space-between;
`;
export const FirstS = styled.div`
  padding: 24px;
  margin-left: 5px;
  /* display: flex; */
`;

export const PageTxts = styled.p`
  margin-bottom: 19px;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #abbbc2;
`;
export const PageTxts2 = styled.p`
  text-align: right;
  margin-bottom: 19px;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: #ffffff;
`;

export const FootBtn = styled.button`
  cursor: pointer;
  margin-left: 25px;
  /* margin-top: -30px; */
  padding: 14px;
  width: 511px;
  height: 48px;
  border: none;
  background: #ea7c69;
  box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.3);
  border-radius: 8px;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #fafafa;
`;
///////////Modal

export const ModalPr = styled.p`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: #abbbc2;
`;
export const ModalLine = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 357px;
  height: 1px;
  border: 1px solid #393c49;
`;

export const ModalMethot = styled.h4`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const ModalPayBox = styled.div`
  display: flex;
  gap: 15px;
`;
export const ModalPayBoxCard = styled.div`
  width: 101px;
  height: 64px;
  background: #252836;
  border: 1px solid #abbbc2;
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
  padding-top: 10px;
  text-align: center;
  position: relative;
`;
export const ModalPayBoxCheck = styled.input`
  position: absolute;
  right: 10px;
  top: 10px;
`;
export const ModalPayBoxLable = styled.label`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
export const ModalFormInputText = styled.input`
  margin: 0 auto;
  padding: 14px;
  width: 357px;
  height: 48px;
  background: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
  color: white;
`;
export const ModalFormInputDate = styled.input`
  margin: 0 auto;
  padding: 14px;
  width: 172px;
  height: 48px;
  background: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
  color: white;
`;
export const ModalFormLabel = styled.label`
  margin-top: 20px;
  margin-bottom: 3px;
  display: block;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  color: white;
`;
export const ModalFormSelect = styled.select`
  margin: 0 auto;
  padding: 14px;
  width: 172px;
  height: 48px;
  background: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
  color: white;
`;
export const ModalFormOption = styled.option`
  margin: 0 auto;
  padding: 104px;
  width: 172px;
  height: 48px;
  background: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
  color: white;
`;
export const FormDateBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const FormDateBoxDiv = styled.div``;
export const ModalPayBoxHd = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  color: #ffffff;
`;
export const ModalFormBtn = styled.button`
  margin-top: 50px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px;
  gap: 8px;
  width: 175px;
  height: 48px;
  border-radius: 8px;
  flex: none;
  order: 1;
  flex-grow: 0;
  color: #ea7c69;
  border: 1px solid #ea7c69;
  &:hover {
    background: #ea7c69;
    box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.4);
    color: white;
    border: 1px solid #ea7c69;
  }
`;
export const ModalPayBoxImg = styled.img``;
export const ModalForm = styled.form``;
