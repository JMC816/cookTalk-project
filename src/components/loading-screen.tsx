import styled from "styled-components";

const LoadingWrraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  height: calc(var(--vh, 1vh) * 100);
`;

const Text = styled.span`
  font-size: 24px;
`;

export default function LoadingScreen() {
  return (
    <LoadingWrraper>
      <Text>Loading...</Text>
    </LoadingWrraper>
  );
}
