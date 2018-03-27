import React from 'react'
import styled from 'styled-components'
import { BarSocialMedia } from 'components'
import { colors } from 'styles'

const StyledSection = styled.section`
  padding-top: 12rem;
  padding-bottom: 5rem;
  margin-top: -10rem;
  background-image: linear-gradient(
    to right bottom,
    ${colors.gradientLight},
    ${colors.gradientDark});
  -webkit-clip-path: polygon(0 0, 100% 50%, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 50%, 100% 100%, 0 100%);
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
