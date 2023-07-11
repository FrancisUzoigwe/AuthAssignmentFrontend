import React from "react";
import styled from "styled-components";

interface iForm {
    name?: string,
    placeholder?: string,
    mt?: string
}
const FormProps: React.FC<iForm> = ({name, placeholder, mt}) => {
  return (
    <div>
      <Container mt={mt!}>
        <Name>{name}</Name>
        <InputHold>
          <Input placeholder={placeholder}/>
        </InputHold>
        <Error>Error</Error>
      </Container>
    </div>
  );
};

export default FormProps;
const Error = styled.div`
color: red;
font-size: 13px;
display: flex;
justify-content: flex-end;
`;

const Input = styled.input`
width: 300px;
height: 30px;
outline: none;
/* padding-left: 5px; */

::placeholder{
padding-left: 5px;
}
`;

const InputHold = styled.div``;

const Name = styled.div`
font-size: 13px;
position: absolute;
background-color: white;
margin-top: -12px;
margin-left: 5px;
`;

const Container = styled.div<{mt: string}>`
width: 95%;
height: 30px;
display: flex;
flex-direction: column;
border: 1px;
margin-top: ${({mt}) => mt};
`;
