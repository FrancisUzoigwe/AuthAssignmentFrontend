import React from 'react'
import styled from 'styled-components'

interface iSocial {
    text?: string,
    icon?: any,
    col?: string
}
const SocialProps: React.FC<iSocial> = ({icon, text, col}) => {
  return (
    <div>
      <Container>
        <Icon col={col!}>{icon}</Icon>
        <Text>{text}</Text>
      </Container>
    </div>
  )
}

export default SocialProps
const Icon = styled.div<{col: string}>`
color: ${({col}) => col};
width: 25px;
height: 25px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 3px;
`;

const Text = styled.div`
margin-left: 13px;
`;

const Container = styled.button`
width: 130px;
display: flex;
align-items: center;
font-family: Nova Oval;
border: 1px solid black;
height: 30px;
border-radius: 5px;
transition: all 350ms;

:hover{
    cursor: pointer;
}
`;