import React from 'react'
import styled from 'styled-components'

const Sider = () => {
  return (
    <div>
     <Container>
        <Main></Main>
     </Container>
    </div>
  )
}

export default Sider
const Main = styled.div``;

const Container = styled.div`
width: 230px;
height: calc(100vh - 60px);
background-color: green;
`;