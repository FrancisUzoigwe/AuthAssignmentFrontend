import React from 'react'
import styled from 'styled-components'

const MainScreen = () => {
  return (
    <div style={{backgroundColor: "red", width: "100%"}}>
      <Container>
        Hello
      </Container>
    </div>
  )
}

export default MainScreen
// const Main = styled.div`
// width: 100;
// `;

const Container = styled.div`
 /* width: 700px; */
height: calc(100vh - 60px);
background: blue;
`;