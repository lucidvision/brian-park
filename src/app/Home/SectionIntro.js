import React from 'react'
import styled from 'styled-components'
import { HeadingPrimary, HeadingSecondary, VideoCode } from 'components'
import { colors } from 'styles'

const StyledHeader = styled.header`
  height: 95vh;
  text-align: center;
  background-size: cover;
  background-position: top;
  position: relative;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
`

const StyledDiv = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  width: 100rem;
  transform: translate(-50%, -50%);
  text-align: center;
`

export default function SectionIntro (props) {
  return (
    <StyledHeader>
      <VideoCode />
      <StyledDiv>
        <HeadingPrimary color={colors.white} text={'Brian Park'} />
        <HeadingSecondary color={colors.white} text='Bringing products to market' />
      </StyledDiv>
    </StyledHeader>
  )
}
