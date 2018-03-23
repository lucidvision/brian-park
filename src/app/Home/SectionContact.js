import React from 'react'
import styled from 'styled-components'
import { BarSocialMedia } from 'components'

const StyledSection = styled.section`
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
