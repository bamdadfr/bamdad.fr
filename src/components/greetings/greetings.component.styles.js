import styled from '@emotion/styled';

import {mediaQueries} from '../../app/styles/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  ${mediaQueries.below.tablet} {
    height: 8em;
  }
`;

export const Bold = styled.span`
  font-weight: 800;
`;
