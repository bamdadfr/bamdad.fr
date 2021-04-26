import styled from 'styled-components'

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    height: 8em;
    max-height: 20vh;
`

export const StyledIcon = styled.div`
    font-size: 3em;
    color: ${props => props.color};
`

export const StyledText = styled.div`
    font-size: 0.8em;
`

export const StyledTextContainer = styled.div`
    overflow: hidden;
`