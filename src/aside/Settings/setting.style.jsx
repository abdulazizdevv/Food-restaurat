import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ProducNav = styled.div`
  margin-left: 80px;
`;
export const ProducNavTitle = styled.h2`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 140%;
  color: #ffffff;
  padding-top: 14px;
  margin-bottom: 14px;
`;
export const ProducNavList = styled.ul`
  background: #1f1d2b;
  list-style-type: none;
  border-radius: 8px;
  width: 275px;
  height: 723px;
`;
export const ProducNavListItem = styled.li``;
export const NavLinkCard = styled(NavLink)`
  padding: 24px 0px;
  margin-top: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding-left: 25px;
  gap: 15px;
  text-decoration: none;
  position: relative;
  &.active {
    background: rgba(234, 124, 105, 0.26);
    color: rgba(234, 124, 105, 0.26);
    &.active {
      /* border-right-width:5px ;
    border-right: 6px solid #EA7C69; */
      &::after {
        content: "";
        position: absolute;
        right: 0;
        top: calc(50% - 20px);
        width: 5px;
        height: 40px;
        background: #ea7c69;
      }
    }
  }

  &:hover {
    background: rgba(234, 124, 105, 0.26);
    color: rgba(234, 124, 105, 0.26);
  }
`;
export const NavLinkCardDiv = styled.div`
  width: 100%;
  height: 100%;
  /* &:hover{
    border-right-width:5px ;
    border-right: 6px solid #EA7C69;
} */
`;
export const NavLinkHeading = styled.h3`
  margin-top: 0;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  color: #ffffff;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin-bottom: 5px;
`;
export const NavLinkPr = styled.p`
  margin-top: 0;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: #abbbc2;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
export const NavLinkImg = styled.img`
  margin-top: 5px;
  width: 13.33px;
  height: 12.67px;
`;
export const Setting = styled.div`
  display: flex;
  gap: 50px;
  background-color: #252836;

`;

export const Products = styled.div`
  margin-top: 100px;
`;
export const HeaderPro = styled.div`
  display: flex;
  align-items: center;
  gap: 400px;
  justify-content: space-between;
`;

export const ProductH = styled.p`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #ffffff;
`;

export const Manage = styled.div`
  display: flex;
  gap: 8px;
  padding: 14px;
  margin-right: 100px;
  width: 178px;
  height: 48px;
  border: 1px solid #393c49;
  filter: drop-shadow(0px 8px 24px rgba(146, 136, 224, 0.3));
  border-radius: 8px;
`;
export const MangeImg = styled.img``;
export const MangeP = styled.p`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #ffffff;
`;

export const ADD = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;
export const AddDish = styled.div`
  width: 221px;
  height: 299px;
  background: #1f1d2b;
  border: 1px dashed #ea7c69;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 140%;
  text-align: center;
  color: #ea7c69;
`;

export const EditDish = styled.div`
  background: #1f1d2b;
  border: 1px dashed #393c49;
  border-radius: 8px;
  height: 299px;
  width: 221px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EdditImg = styled.img`
  /* width: 143px;
  height: 130px; */
  margin-top: 22px;
  margin-bottom: 14px;
`;
export const EditP = styled.p`
  width: 144px;
  height: 36px;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  text-align: center;
  color: #ffffff;
`;

export const Price = styled.div`
  display: flex;
`;
export const PricePay = styled.p`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  color: #abbbc2;
`;
export const Bowls = styled.p`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  color: #abbbc2;
`;

export const EditBtn = styled.button`
  background: #613536;
  border-radius: 0px 0px 8px 8px;
  margin-top: 20px;
  height: 52px;
  width: 221px;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #ea7c69;
  border: none;
`;

export const EditImg = styled.img`
  margin-right: 5px;
  /* filter: saturate(5); */
`;
export const LineS = styled.div`
  margin-top: 16px;
  width: 1043px;
  height: 0px;
  border: 1px solid #393c49;
`;

// /////////Modal
export const ModalForm = styled.form``;
export const ModalFormSelect = styled.select`
  padding: 14px 96px 14px 14px;
  width: 95%;
  height: 46px;
  background: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
  margin: 0 auto;
  color: white;
  margin-top: 20px;
`;
export const ModalFormOption = styled.option`

`;
export const EditFormInput = styled.input`
  padding: 14px 96px 14px 14px;
  width: 95%;
  height: 46px;
  background: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
  margin: 0 auto;
  color: white;
  margin-top: 20px;
`;
export const UploadBox = styled.div`
  margin-top: 20px;
  width: 95%;
  height: 157px;
  background: #2d303e;
  border: 1px dashed #ea7c69;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const UploadBoxDiv = styled.div`
  text-align: center;
`;

export const UploadBoxImg = styled.img`

`;
export const UploadBoxHd = styled.h4`
font-weight: 500;
font-size: 14px;
line-height: 130%;
color: #EA7C69;
flex: none;
order: 0;
flex-grow: 0;
`;
export const UploadBoxPr = styled.p`
font-weight: 400;
font-size: 12px;
line-height: 140%;
color: #ABBBC2;
flex: none;
order: 1;
flex-grow: 0
`;

export const FormDateBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
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
  width: 217px;
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
