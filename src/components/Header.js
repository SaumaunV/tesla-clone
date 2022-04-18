import React, { useState } from 'react'
import styled from 'styled-components';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from  "react-redux"
import { Link } from 'react-router-dom';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  function handleMenuState(){
    setBurgerStatus(!burgerStatus);
  }

  return (
    <Container>
      <Link to="/">
        <img src="/images/logo.svg" alt="tesla logo" />
      </Link>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <Link key={index} to={car.replace(" ", "-")}>
              {car}
            </Link>
          ))}
        <Link to="/Solar-Roof">Solar Roof</Link>
        <Link to="/Solar-Panels">Solar Panels</Link>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu onClick={handleMenuState} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CloseButton onClick={handleMenuState} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="#">
                {car}
              </a>
            </li>
          ))}
        <li key="e">
          <a href="#">Existing Inventory</a>
        </li>
        <li key="u">
          <a href="#">Used Inventory</a>
        </li>
        <li key="t">
          <a href="#">Trade-in</a>
        </li>
        <li key="c">
          <a href="#">Cybertruck</a>
        </li>
        <li key="r">
          <a href="#">Roadster</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    margin-right: 10px;
    padding: 0 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 2;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? "translateX(0)": "translate(100%)"};
  transition: transform 0.2s;

  li{
    padding: 15px 0;
    border-bottom: 1px solid rgb(0,0,0,.2);
  }

  a{
    font-weight: 600;
  }
`

const CloseButton = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export default Header