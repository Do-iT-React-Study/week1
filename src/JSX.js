import React from "react";
import "./JSX.css";
import styled from "styled-components";
import Yootae from "./Yootae"


export default function JSX() {

  const name = "ReacT";

  return (
    <div>
      {name == "reacT" ? <h1>is react</h1>:null}
      <h1>Hello {name}!</h1>
      <h2>잘 작동하나요?</h2>
      <h3>만나서 반갑습니당 :</h3>
      <input />
      <br />
      <br />
      <Hellostyled>Hello</Hellostyled>
      <Yootae />
    </div>
  );
}
const Hellostyled = styled.div`
  background-color:skyblue;
  font-size: 500px;
  color: white;
`;