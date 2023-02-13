import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const Homecategory = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 104px;
  background: #1f1d2b;
  border-radius: 16px;
`;
export const UlAll = styled.ul`
  margin-top: 35px;
  & .active {
  }
`;
export const AllLi = styled.li`
  position: relative;
  list-style: none;
  margin-bottom: 78px;
  width: 100%;

  & .active {
    & img {
      filter: brightness(500%);
    }
  }
`;

export const Logos = styled.img`
  /* padding-left: 24px; */
  /* padding-left: -80px; */
  /* padding-right: 24px; */
  padding: 24px;
`;
export const Firstimg = styled.img``;

export const NavlinkActive = styled(NavLink)`
  padding: 20px;
  padding-top: 25px;
  transform: scale(0);
  transition: all 0.3s ease-in-out;
  position: relative;

  &:hover {
    & img {
      filter: brightness(500%);
    }
    background-color: #ea7c69;
    box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.32);
    border-radius: 8px;
  }
  &.active {
    background-color: #ea7c69;
    box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.32);
    border-radius: 8px;
  }
`;
