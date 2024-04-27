import styled from '@emotion/styled';

export const Section = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;

  margin: 0 0 0.6em 0.667em;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.4em;

  > div {
    margin-right: 0.46em;

    &:last-child {
      margin-right: 0;
    }
  }
`;

interface LinkProps {
  offset?: number;
}

export const Link = styled.a<LinkProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  transition: color 0.2s cubic-bezier(0.42, 0, 0.58, 1) 0s;

  transform: translate3d(0px, ${(props) => `${props.offset ?? 0}px`}, 0);

  &:hover {
    color: ${(props) => props.color};
    cursor: pointer;
  }
`;
