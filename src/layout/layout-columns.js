import React from 'react'
import styled from 'styled-components'
import { ColumnsData } from '../components/columns-data'

const StyledContainer = styled.div`
  margin: 1em;
  height: 15em;
`

const StyledWrapper = styled.div`
  align-self: flex-end;
`

const StyledDivLeft = styled.div`
  height: 10em;
`

const StyledDivRight = styled.div`
  white-space: nowrap;
  height: 8em;
`

export const LayoutColumns = () => (
    <StyledContainer role="main" className="columns is-centered is-mobile is-multiline">

        <StyledWrapper className="column is-one-fifth-fullhd is-4-desktop is-4-tablet is-full-mobile is-paddingless">
            <StyledDivLeft className="columns is-marginless is-mobile">
                <StyledWrapper className="column is-full is-paddingless">
                    <div className="is-size-4-desktop is-size-5-tablet is-size-5-mobile">
                        {ColumnsData[0].map ((e, k) => e (k))}
                    </div>
                </StyledWrapper>
            </StyledDivLeft>
        </StyledWrapper>

        <StyledWrapper className="column is-one-fifth-fullhd is-4-desktop is-4-tablet is-full-mobile is-paddingless">
            <StyledDivRight className="columns is-marginless is-mobile">
                <StyledWrapper className="column is-full is-paddingless">
                    {ColumnsData[1].map ((e, k) => e (k))}
                </StyledWrapper>
            </StyledDivRight>
        </StyledWrapper>

    </StyledContainer>
)

