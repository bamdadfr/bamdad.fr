import styled from 'styled-components';
import {Breakpoints} from '../../app/styles/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media screen and (max-width: ${Breakpoints.tablet - 1}px) {
    height: 8em;
  }
`;

export const Bold = styled.span`
  font-weight: 800;
`;
