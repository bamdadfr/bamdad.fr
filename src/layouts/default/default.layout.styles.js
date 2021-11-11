import styled from 'styled-components';
import { Breakpoints } from '../../app/styles/breakpoints';

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export const TopSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 1em;
  grid-gap: 2em;

  @media screen and (max-width: ${Breakpoints.tablet - 1}px) {
    grid-gap: 1em;
    padding-bottom: 0;
    transform: translate3d(0, 7.5%, 0);
    flex-direction: column;
    align-items: center;
  }

  > div {
    overflow: hidden;
    min-width: 11em;
    transform: translate3d(5%, 0, 0);

    @media screen and (max-width: ${Breakpoints.tablet - 1}px) {
      transform: none;
      width: calc(100% - 1.7em);
    }
  }
`;
