import React from 'react'
import styled from 'styled-components'
import { BarSocialMedia } from 'components'

const StyledSection = styled.section`
  padding: 4rem;
  display: flex;
  justify-content: center;
`

export default function SectionContact (props) {
  return (
    <StyledSection>
      <BarSocialMedia />
    </StyledSection>
  )
}
