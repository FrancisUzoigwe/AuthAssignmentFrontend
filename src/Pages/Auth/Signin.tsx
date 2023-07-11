import styled from "styled-components";
import { BsRocketTakeoffFill } from "react-icons/bs";
import FormProps from "../../Components/reUse/FormProps";
import ButtonProps from "../../Components/reUse/ButtonProps";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <Container>
        <Card>
          <Top>
            <Logo>
              <BsRocketTakeoffFill size={30} />
            </Logo>
          </Top>

          <div style={{ fontSize: "14px", marginTop: "5px" }}>
            Signin to your account
          </div>
          <Buttom>
            <FormProps
              name="Enter Email:"
              placeholder="test@mail.com"
              mt="40px"
            />
            <FormProps
              name="Password:"
              placeholder="Enter Password"
              mt="40px"
            />
          </Buttom>

          <ButtonHold>
            <ButtonProps text="Signin" bgcol="green" to="/auth" col="white" />
          </ButtonHold>
          <Dialog>
            Dont't have an account? <To to="/signup">Signup</To>
          </Dialog>
        </Card>
      </Container>
    </div>
  );
};

export default Signup;
const To = styled(NavLink)`
  color: blue;
  text-decoration: underline;
  font-size: 15px;
`;

const Dialog = styled.div`
  font-size: 15px;
  display: flex;
  margin-top: 15px;
`;



const ButtonHold = styled.div`
  margin-top: 30px;
`;


const Logo = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 5px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Buttom = styled.div``;

const Top = styled.div`
  width: 95%;
  margin-top: 10px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  background-color: white;
  width: 350px;
  height: 350px;
  border-radius: 15px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;
