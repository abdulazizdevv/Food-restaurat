import {
  FirstDiv,
  Flexbox,
  HeadTxt,
  PageTxt,
  TextL,
  InputR,
  InputS,
  SearchImg,
  AllCards,
  NavLinks,
  NavLinksNext,
  AllLinks,
  Line,
  Universal,
  Main,
  Header2,
  SelectType,
  SelectAll,
  SelectOpt,
  Cards,
  CardP,
  CardSecondP,
  Card,
  CardImg,
  AllMain,
  Head6,
  LeftBit,
  BtnGroup,
  Btn,
  Item,
  TextPlace,
  Qtr,
  Ltxt,
  LineL,
  InpCard,
  AddCards,
  ImgCard,
  Paragraph,
  ParagraphPrice,
  FlexRow,
  Divs,
  BtnCount,
  PriceP,
  DivP,
  Inputs,
  InputDiv,
  Trash,
  TrashBtn,
  TrashImg,
  FootL,
  TxtP,
  PageTxts,
  PageTxts2,
  FirstS,
  FootBtn,
  ModalPr,
  ModalLine,
  ModalMethot,
  ModalPayBoxCard,
  ModalPayBox,
  ModalPayBoxHd,
  ModalPayBoxImg,
  ModalPayBoxCheck,
  ModalPayBoxLable,
  ModalFormInputText,
  ModalFormLabel,
  FormDateBox,
  ModalFormInputDate,
  FormDateBoxDiv,
  ModalFormSelect,
  ModalFormOption,
  ModalFormBtn,
  ModalForm,
} from "./section.style";
import Search from "../../assets/images/search1/Form Elements/Textfield/Icon/Fill/Mask.svg";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import { HotDishes } from "../../pages/HotDishes/HotDishes";
import foods1 from "../../assets/images/foods1.png";
import Trashes from "../../assets/images/Vector.png";
import { data } from "../../data";
import { Modal } from "../../components/Modal/Modal";
import { useState } from "react";

export const Home = () => {
  const [homeModal, setHomeModal] = useState(false);

  return (
    <>
      <FirstDiv>
        <Modal modal={homeModal} setModal={setHomeModal} title="Payment">
          <ModalPr>3 payment method available</ModalPr>
          <ModalLine></ModalLine>
          <ModalMethot>Payment Method</ModalMethot>
          <ModalPayBox>
            <ModalPayBoxCard>
              <ModalPayBoxCheck type="radio" name="radio-check" id="inp1" />
              <ModalPayBoxLable htmlFor="inp1"></ModalPayBoxLable>
              <ModalPayBoxImg src={Trashes} alt="img" />
              <ModalPayBoxHd>Credit Card</ModalPayBoxHd>
            </ModalPayBoxCard>
            <ModalPayBoxCard>
              <ModalPayBoxCheck type="radio" name="radio-check" id="inp2" />
              <ModalPayBoxLable htmlFor="inp2"></ModalPayBoxLable>
              <ModalPayBoxImg src={Trashes} alt="img" />
              <ModalPayBoxHd>Credit Card</ModalPayBoxHd>
            </ModalPayBoxCard>
            <ModalPayBoxCard>
              <ModalPayBoxCheck type="radio" name="radio-check" id="inp3" />
              <ModalPayBoxLable htmlFor="inp3"></ModalPayBoxLable>
              <ModalPayBoxImg src={Trashes} alt="img" />
              <ModalPayBoxHd>Credit Card</ModalPayBoxHd>
            </ModalPayBoxCard>
          </ModalPayBox>
          <ModalForm>
            <ModalFormLabel htmlFor="user_name">Cardholder Name</ModalFormLabel>

            <ModalFormInputText
              type="text"
              id="user_name"
              name="user_name"
              placeholder="Levi Ackerman"
            />

            <ModalFormLabel htmlFor="card_number">Card Number</ModalFormLabel>

            <ModalFormInputText
              type="number"
              id="card_number"
              name="card_number"
              placeholder="2564 1421 0897 1244"
            />

          <FormDateBox>
            <FormDateBoxDiv>
              <ModalFormLabel htmlFor="date">Expiration Date</ModalFormLabel>

              <ModalFormInputDate
                type="date"
                id="date"
                name="date"
                placeholder="12/2022"
              />
            </FormDateBoxDiv>
            <FormDateBoxDiv>
              <ModalFormLabel htmlFor="password">CVV</ModalFormLabel>
              <ModalFormInputDate
                type="password"
                id="password"
                name="password"
                placeholder="°°°"
              />
            </FormDateBoxDiv>
          </FormDateBox>
          <ModalLine></ModalLine>
          <FormDateBox>
            <FormDateBoxDiv>
              <ModalFormLabel htmlFor="date">Expiration Date</ModalFormLabel>

             <ModalFormSelect>
             <ModalFormOption value="Dine In" selected>Dine In</ModalFormOption>
              <ModalFormOption  value="ToGo">To Go</ModalFormOption>
              <ModalFormOption  value="Delivery">Delivery</ModalFormOption>
             </ModalFormSelect>
            </FormDateBoxDiv>
            <FormDateBoxDiv>
              <ModalFormLabel htmlFor="table">Table no.</ModalFormLabel>
              <ModalFormInputDate
                type="text"
                id="table"
                name="table"
                placeholder="140"
              />
            </FormDateBoxDiv>
         
          </FormDateBox>
          <FormDateBox>

          <ModalFormBtn>Cancel</ModalFormBtn>
            <ModalFormBtn>Confirm Payment</ModalFormBtn>
          </FormDateBox>
          </ModalForm>
        </Modal>

        <AllMain>
          <AllCards>
            <Flexbox>
              <TextL>
                <HeadTxt>Jaegar Resto</HeadTxt>
                <PageTxt>Tuesday, 2 Feb 2021</PageTxt>
              </TextL>
              <InputR>
                <SearchImg src={Search} alt="search" />
                <InputS
                  type="search"
                  placeholder="Search for food, coffe, etc.."
                />
              </InputR>
            </Flexbox>
            <AllLinks>
              <Universal>
                <NavLinks to="/">Hot Dishes</NavLinks>
              </Universal>
              <Universal>
                <NavLinksNext to="/coldDishes">Cold Dishes</NavLinksNext>
              </Universal>
              <Universal>
                <NavLinksNext to="/soup">Soup</NavLinksNext>
              </Universal>
              <Universal>
                <NavLinksNext to="/gril">Grill</NavLinksNext>
              </Universal>
              <Universal>
                <NavLinksNext to="/appetizer">Appetizer</NavLinksNext>
              </Universal>
              <Universal>
                <NavLinksNext to="/desert">Desert</NavLinksNext>
              </Universal>
            </AllLinks>
            <Line></Line>
          </AllCards>
          <Outlet />
        </AllMain>
        <Main></Main>
        <LeftBit>
          <Head6>Orders #34562</Head6>
          <BtnGroup>
            <Btn>Dine In</Btn>
            <Btn>To Go</Btn>
            <Btn>Delivery</Btn>
          </BtnGroup>
          <TextPlace>
            <Item>Item</Item>
            <Ltxt>
              <Qtr>Qty</Qtr>
              <Qtr>Price</Qtr>
            </Ltxt>
          </TextPlace>
          <LineL></LineL>

          <AddCards>
            {data.map((item) => {
              return (
                <InpCard>
                  <FlexRow>
                    <Divs>
                      <ImgCard src={item.img} alt="foods" />
                      <DivP>
                        <Paragraph>{item.title}</Paragraph>
                        <ParagraphPrice>{item.price}</ParagraphPrice>
                      </DivP>
                    </Divs>
                    <BtnCount>{item.order}</BtnCount>
                    <PriceP>{item.btnPrice}</PriceP>
                  </FlexRow>
                  <Trash>
                    <InputDiv>
                      <Inputs
                        type="text"
                        placeholder="Please, just a little bit spicy only."
                      />
                    </InputDiv>
                    <TrashBtn>
                      <TrashImg src={Trashes} alt="trash" />
                    </TrashBtn>
                  </Trash>
                </InpCard>
              );
            })}
          </AddCards>
          <FootL>
            <TxtP>
              <FirstS>
                <PageTxts>Discount</PageTxts>
                <PageTxts>Sub total</PageTxts>
              </FirstS>
              <FirstS>
                <PageTxts2>$0</PageTxts2>
                <PageTxts2> $ 21,03</PageTxts2>
              </FirstS>
            </TxtP>
            <FootBtn onClick={()=> setHomeModal(true)} >Continue to Payment</FootBtn>
          </FootL>
        </LeftBit>
      </FirstDiv>
    </>
  );
};
