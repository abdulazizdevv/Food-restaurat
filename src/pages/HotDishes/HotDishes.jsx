import {
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
} from "../../aside/Home/section.style";
import foods1 from "../../assets/images/foods1.png";

export const HotDishes = () => {
  return (
    <Main>
      <SelectAll>
        <Header2>Choose Dishes</Header2>
        <SelectType>
          <SelectOpt value="dine">Dine In</SelectOpt>
          <SelectOpt value="go">To Go</SelectOpt>
          <SelectOpt value="deliver">Delivery</SelectOpt>
        </SelectType>
      </SelectAll>
      <Cards>
        <Card>
          <CardImg src={foods1} alt="food" />
          <CardP>
            Spicy seasoned <br /> seafood noodles
          </CardP>
          <CardSecondP>$ 2.29</CardSecondP>
          <CardSecondP>20 Bowls available</CardSecondP>
        </Card>
        <Card>
          <CardImg src={foods1} alt="food" />
          <CardP>
            Spicy seasoned <br /> seafood noodles
          </CardP>
          <CardSecondP>$ 2.29</CardSecondP>
          <CardSecondP>20 Bowls available</CardSecondP>
        </Card>
        <Card>
          <CardImg src={foods1} alt="food" />
          <CardP>
            Spicy seasoned <br /> seafood noodles
          </CardP>
          <CardSecondP>$ 2.29</CardSecondP>
          <CardSecondP>20 Bowls available</CardSecondP>
        </Card>
        <Card>
          <CardImg src={foods1} alt="food" />
          <CardP>
            Spicy seasoned <br /> seafood noodles
          </CardP>
          <CardSecondP>$ 2.29</CardSecondP>
          <CardSecondP>20 Bowls available</CardSecondP>
        </Card>
      </Cards>
    </Main>
  );
};
