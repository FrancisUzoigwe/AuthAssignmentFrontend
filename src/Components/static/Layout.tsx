import styled from "styled-components";
import Header from "./Header";
import Sider from "./Sider";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <Main>
        <Sider />
        <Outlet />
      </Main>
    </div>
  );
};

export default Layout;

const Main = styled.div`
  display: flex;
`;
