import React from "react";
import "./JSX.css";
import styled from "styled-components";
import Chaemin from "./chaemin";

export default function JSX() {
  const name = "reactt";

  return (
    <div>
      {name == "react" && <h1>Hello {name}!</h1>}
      <h2>잘 작동하나요?</h2>
      <h3>만나서 반갑습니당 :></h3>
      <input />
      <br />
      <br />
      <HelloStyled>Hello World!</HelloStyled>
      <Chaemin />
    </div>
  );
}

const HelloStyled = styled.div`
  background-color: skyblue;
  font-size: 100px;
  color: white;
`;
