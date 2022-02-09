import styled from '@emotion/styled';
import {mediaQueries} from '../../app/styles/breakpoints';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${mediaQueries.above.desktop} {
    font-size: .9em;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  ${mediaQueries.below.mobile} {
    transform: translate3d(0, -2vh, 0);
  }

  ${mediaQueries.below.phablet} {
    transform: translate3d(0, -4vh, 0);
  }

  ${mediaQueries.below.tablet} {
    height: 9em;
  }

  > div {
    height: 2.667em;
    margin: 0.25em 0;

    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Button = styled.a`
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};

  box-shadow: rgb(50 50 50 / 10%) 0 1px 2px 1px;
  transition: all 0.2s cubic-bezier(0.42, 0, 0.58, 1) 0s;
  padding: calc(.5em + 1px) 1em;
  border-radius: 4px;

  &:hover {
    transform: translateY(-2px);
    color: ${(props) => props.hover};
    background: ${(props) => props.color};
  }
`;
