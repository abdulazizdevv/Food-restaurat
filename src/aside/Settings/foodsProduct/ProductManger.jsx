import {
  Products,
  ProductH,
  Manage,
  MangeImg,
  MangeP,
  HeaderPro,
  LineS,
} from "../setting.style";
import {
  AllLinks,
  Universal,
  NavLinksNext,
  NavLinks,
} from "../../Home/section.style";

import Manages from "../../../assets/images/Filter.png";
import food from "../../../assets/images/foods2.png";
import edit from "../../../assets/images/edit.png";
import { Outlet } from "react-router-dom";
import { HotDishPage } from "./HotDishPage";
import { ColdDishes } from "../../../pages/ColdDishes/ColdDishes";
import { Soup } from "../../../pages/Soup/Soup";
import { Gril } from "../../../pages/Gril/Gril";
import { Appetizer } from "../../../pages/Appetizer/Appetizer";
import { Desert } from "../../../pages/Desert/Desert";

export const ProductManger = () => {
  return (
    <Products>
      <HeaderPro>
        <ProductH>Products Management</ProductH>
        <Manage>
          <MangeImg src={Manages} alt="filter" />
          <MangeP>Manage Categories</MangeP>
        </Manage>
      </HeaderPro>

      <AllLinks>
        <Universal>
          <NavLinks to="/hotDishPage">Hot Dishes</NavLinks>
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
      <LineS></LineS>
      <Outlet />
    </Products>
  );
};
