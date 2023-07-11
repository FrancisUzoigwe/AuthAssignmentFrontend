import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom"
interface iButton {
  text?: string;
  col?: string;
  hcol?: string;
  bgcol?: string;
  hbgcol?: string;
  to?: string;
}

const ButtonProps: React.FC<iButton> = ({ text, col, hcol, bgcol, hbgcol, to }) => {
  return (
    <div>
      <Button col={col!} bgcol={bgcol!} hbgcol={hbgcol!} hcol={hcol!} to={to!}>
        {text}
      </Button>
    </div>
  );
};

export default ButtonProps;
const Button = styled(NavLink)<{ col: string; bgcol: string, hbgcol: string, hcol: string }>`
  padding: 10px 20px;
  border-radius: 3px;
  border: none;
  color: ${({ col }) => col};
  background-color: ${({ bgcol }) => bgcol};
  transition: all 350ms;
  text-decoration: none;

  :hover{
    cursor: pointer;
    background-color:  ${({ hbgcol }) =>hbgcol};
    background-color:  ${({ hcol }) =>hcol};
  }
`;
