import React from 'react'
import styled from 'styled-components'
import { BarSocialMedia } from 'components'
import { colors, media } from 'styles'

const StyledSection = styled.section`
  padding-top: 12rem;
  padding-bottom: 5rem;
  margin-top: -10rem;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    to right bottom,
    ${colors.gradientLight},
    ${colors.gradientDark});
  -webkit-clip-path: polygon(0 0, 100% 50%, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 50%, 100% 100%, 0 100%);

  ${media.phone`
    padding-top: 10rem;
    -webkit-clip-path: polygon(0 0, 100% 35%, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 35%, 100% 100%, 0 100%);
  `}
`

const StyledBarSocialMedia = styled(BarSocialMedia)`
  width: 40%;

  ${media.tabLand`
    width: 65%;
  `}

  ${media.phone`
    width: 90%;
  `}
`

export default function SectionContact (props) {
  return (
    <StyledSection>
      <StyledBarSocialMedia className='wow slideInUp' />
    </StyledSection>
  )
}
