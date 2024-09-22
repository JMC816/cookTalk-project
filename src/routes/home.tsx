import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeWrapper = styled.div`
  display: grid;
  place-items: center;
  grid-template-rows: 5fr 1fr;
  flex-direction: column;
  background-color: #f2f2f2;
  height: calc(var(--vh, 1vh) * 100);
`;

const HomeTitle = styled.span`
  font-size: 42px;
  font-family: "Moirai One", system-ui;
  font-weight: bold;
  color: darkorange;
`;

const StartBtn = styled.button`
  height: 40px;
  width: 200px;
  border-radius: 10px;
  background-color: darkorange;
  border: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  &:active {
    filter: brightness(80%);
  }
`;

export default function Home() {
  return (
    <HomeWrapper>
      <HomeTitle>Cook Talk</HomeTitle>
      <Link to="/login">
        <StartBtn>시작하기</StartBtn>
      </Link>
    </HomeWrapper>
  );
}
