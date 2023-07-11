import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ButtonProps from "../reUse/ButtonProps";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo to="/">Francis.K.Uzoigwe</Logo>
          <Action>
            <ButtonProps
              text="Logout"
              bgcol="darkorange"
              col="white"
              hbgcol=" #585858"
              to="/"
            />
          </Action>
        </Main>
      </Container>
    </div>
  );
};

export default Header;
const Action = styled.div`
  display: flex;
  /* width: 16%; */
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(NavLink)`
  font-size: 25px;
  transition: all 350ms;
  text-decoration: none;
  color: white;

  :hover {
    cursor: pointer;
    color: #6f6f6f;
  }
`;

const Main = styled.div`
  width: 95%;
  height: 60px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
