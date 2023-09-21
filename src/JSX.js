import React from "react";
import styled from 'styled-components';

export default function JSX() {
  const name = "react"


  return (
    <div>
      {name == "react" && <h1>Hello {name}! </h1>}
      <h1>Hello {name}</h1>
      <h2>잘 작동하나요?</h2>
      <h3>만나서 반갑습니당 :></h3>
      <div > </div>
      <HelloStyled> HELLO </HelloStyled>
      <Onetiger />
    </div>
  );
}



const HelloStyled  = styled.div`
  background-color: skyblue;
  font-size: 100px;
  color: white;
`;