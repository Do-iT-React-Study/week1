import React from "react";
import "./JSX.css"; // 2. css module
import styled from "styled-components"; // 3.styled-components 방법
import "./Taeyoung";

export default function JSX() {

  const name = "react";

  return (
    <div>
      {name == "react" ? <h1>Hello {name}!</h1> : <h1>리액트 아님</h1>}
      <h2>잘 작동하나요?</h2>
      <h3 className="Hello">만나서 반갑습니당 </h3>
      <Hellostyled > 
      {/* 인라인 스타일 사용 시 카멜 기법을 사용해야 함. 일반적인 html css 와 차이 */}
        Hello World!
      </Hellostyled>
      <Taeyoung />
    </div>
  );
}

const Hellostyled = styled.div `
  background-color:pink;
  font-size:30px;
`;