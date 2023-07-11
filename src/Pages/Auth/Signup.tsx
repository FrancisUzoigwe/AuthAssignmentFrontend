import styled from "styled-components";
import { BsRocketTakeoffFill } from "react-icons/bs";
import FormProps from "../../Components/reUse/FormProps";
import SocialProps from "../../Components/reUse/SocialProps";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
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
          <Mid>
            <SocialProps text="Google" icon={<FcGoogle size={20} />} />
            <SocialProps
              text="Facebook"
              icon={<AiFillFacebook size={25} />}
              col="blue"
            />
          </Mid>
          <div style={{ fontSize: "14px", marginTop: "5px" }}>Signup With</div>
          <Buttom>
            <FormProps name="Name:" placeholder="Enter Your Name" mt="20px" />
            <FormProps
              name="Password:"
              placeholder="Enter Password"
              mt="30px"
            />
            <FormProps name="Email:" placeholder="example@mail.com" mt="30px" />
            <FormProps
              name="Confirm Password:"
              placeholder="Repeat Password"
              mt="30px"
            />
          </Buttom>
          <Text>
            By Signing up you agree to our <span>Terms</span> and{" "}
            <span>Conditions</span>
          </Text>
          <ButtonHold>
            <ButtonProps text="Signup" bgcol="green" to="/signin" col="white" />
          </ButtonHold>
          <Dialog>Have an account? <To to='/signin'>Signin</To></Dialog>
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


const Text = styled.div`
  font-size: 12px;
  margin-top: 20px;
  span {
    font-weight: bolder;
    text-decoration: underline;
    color: blue;

    :hover {
      cursor: pointer;
    }
  }
`;

const ButtonHold = styled.div`
  margin-top: 17px;
`;

const Mid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 87%;
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
  height: 470px;
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
