import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: -10;

  background: linear-gradient(
    to bottom right,
    ${(props) => props.theme.colors.background.blue},
    ${(props) => props.theme.colors.background.purple}
  );
  background-size: 400% 400%;

  animation: BackgroundAnimation 5s cubic-bezier(0.42, 0, 0.58, 1) infinite;

  @keyframes BackgroundAnimation {
    0% {
      background-position: 0 17%;
    }
    50% {
      background-position: 100% 84%;
    }
    100% {
      background-position: 0 17%;
    }
  }
`;
