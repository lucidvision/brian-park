import React from 'react'
import styled, { keyframes } from 'styled-components'
import { HeadingPrimary, HeadingSecondary, VideoCode } from 'components'
import { colors, fontSizes } from 'styles'

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
  top: 42%;
  left: 50%;
  width: 100rem;
  transform: translate(-50%, -50%);
  text-align: center;
`

const moveInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }

  80% {
    transform: translateX(1rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
`

const moveInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }

  80% {
    transform: translateX(-1rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
`

const AnimatedHeadingPrimary = styled(HeadingPrimary)`
  animation: ${moveInLeft} 1s ease-out;
`

const AnimatedHeadingSub = styled(HeadingPrimary)`
  animation: ${moveInRight} 1s ease-out;
`

export default function SectionIntro (props) {
  return (
    <StyledHeader>
      <VideoCode />
      <StyledDiv>
        <AnimatedHeadingPrimary color={colors.white} text={'Brian Park'} />
        <AnimatedHeadingSub color={colors.white} size={fontSizes.small} text='Bringing products to market' />
      </StyledDiv>
    </StyledHeader>
  )
}
