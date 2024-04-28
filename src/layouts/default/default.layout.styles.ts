import styled from '@emotion/styled';

import {mediaQueries} from 'src/app/styles/breakpoints';

// todo: remove
export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export const NewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const TopSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 2em;
  padding-bottom: 2em;

  ${mediaQueries.below.tablet} {
    flex-direction: column;
    align-items: center;
    gap: 1em;
    padding-bottom: 0.85em;
  }

  > div {
    overflow: hidden;
    min-width: 11em;
    transform: translate3d(5%, 0, 0);

    ${mediaQueries.below.tablet} {
      transform: none;
      //width: calc(100% - 1.7em);
    }
  }
`;
