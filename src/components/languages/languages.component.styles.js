import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    // todo: wrap in media queries to set height only on portrait
    height: 7em;
`

export const Icon = styled.div`
    font-size: 3em;
    color: ${(props) => props.color};
    transform: translate3d(0, 0.15em, 0);
`

export const Label = styled.div`
    font-size: 0.8em;
    font-weight: 800;
`

export const LanguageContainer = styled.div`
    overflow: hidden;
`