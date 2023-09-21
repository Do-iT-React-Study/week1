import React from "react";
import './JSX.css';
import styled from "styled-components";
import Hing from "./hing";

export default function JSX() {

  const name = "react";

  return (
    <div>
      {name == "react1" ? <h1>is react</h1>:null}
      <h1>Hello {name}!!</h1>
      <h2>잘 작동하나요?</h2>
      <h3>만나서 반갑습니당 :</h3>
      <Hellostyled>HI</Hellostyled>
      <Hing/>
    </div>
  );
}

const Hellostyled = styled.div`
  background-color:skyblue;
  font-size: 30px;
`;