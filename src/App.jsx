import styled from "styled-components";
import { Aside } from "./aside/aside";
import { Dashboard } from "./aside/Dashboard/Dashboard";
import { Home } from "./aside/Home/Home";
import { Headers } from "./components/Headers/Headers";
import { GlobalStyles } from "./globalStyles";
import { Sections } from "./components/Sections/Sections";
import { Route, Routes } from "react-router-dom";

import { Settings } from "./aside/Settings/Settings";
import { HotDishes } from "./pages/HotDishes/HotDishes";
import { ColdDishes } from "./pages/ColdDishes/ColdDishes";
import { Soup } from "./pages/Soup/Soup";
import { Gril } from "./pages/Gril/Gril";
import { Appetizer } from "./pages/Appetizer/Appetizer";
import { Desert } from "./pages/Desert/Desert";
import { Discount } from "./aside/Discount/Discount";
import { Email } from "./aside/Email/Email";
import { Notification } from "./aside/Notification/Notification";
import { LogOut } from "./aside/LogOut/LogOut";
import { ProductManger } from "./aside/Settings/foodsProduct/ProductManger";
import { HotDishPage } from "./aside/Settings/foodsProduct/HotDishPage";

function App() {
  return (
    <All>
      <Aside />

      <Routes>
        <Route path="/*" element={<Home />}>
          <Route index element={<HotDishes />} />
          <Route path="coldDishes" element={<ColdDishes />} />
          <Route path="soup" element={<Soup />} />
          <Route path="gril" element={<Gril />} />
          <Route path="appetizer" element={<Appetizer />} />
          <Route path="desert" element={<Desert />} />
        </Route>
        <Route path="/discount" element={<Discount />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/email" element={<Email />} />
        <Route path="/notification" element={<Notification />} />

        <Route path="setting/*" element={<Settings />}>
          <Route path="products" element={<ProductManger />}>
            <Route path="products/hotDishPage" element={<HotDishPage />} />
          </Route>
          {/* <Route path="coldDishes/*" element={<ColdDishes />} />
        <Route path="soup/*" element={<Soup />} />
        <Route path="gril/*" element={<Gril />} />
        <Route path="appetizer/*" element={<Appetizer />} />

        <Route path="desert/*" element={<Desert />} /> */}
        </Route>
        <Route path="/logout" element={<LogOut />} />
      </Routes>

      <GlobalStyles />
    </All>
  );
}

const All = styled.div`
  background-color: #252836;
  height: 100vh;
`;

const DirectonRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Super = styled.div``;

export default App;
