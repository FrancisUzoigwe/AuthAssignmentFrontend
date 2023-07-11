import React from 'react'
import styled from 'styled-components'

const LandingScreen = () => {
  return (
    <Holder>
      <Container>Welcome to Francis Uzoigwe's To-Do Web app</Container>
      <Main>An interface where you write down your tasks as we help you get em done</Main>
    </Holder>
  )
}

export default LandingScreen
const Container = styled.div`
font-size: 35px;
font-weight: 500;
color: #ffff;
`;

const Main = styled.div`
font-size: 15px;
font-weight: 500;
color: #717171;
`;

const Holder = styled.div`
display: flex;
height: calc(100vh - 60px);
background: black;
flex-direction: column;
justify-content: center;
align-items: center;
`