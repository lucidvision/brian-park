import React from 'react'
import styled, { keyframes } from 'styled-components'
import { HeadingPrimary, VideoCode } from 'components'
import { colors, fontSizes, media } from 'styles'

const StyledSection = styled.section`
  height: 100vh;
`

const StyledHero = styled.div`
  height: 95vh;
  text-align: center;
  background-size: cover;
  background-position: top;
  position: relative;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);

  ${media.tabPort`
    height: 85vh;
  `}
`

const StyledDiv = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
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

const pulsate = keyframes`
  0% {
    transform: scaleX(1) scaleY(1);
  }

  50% {
    transform: scaleX(1.2) scaleY(1.2);
  }
`

const AnimatedHeadingPrimary = styled(HeadingPrimary)`
  animation: ${moveInLeft} 1s ease-out;
`

const AnimatedHeadingSub = styled(HeadingPrimary)`
  animation: ${moveInRight} 1s ease-out;
`

const StyledArrow = styled.i`
  position: relative;
  bottom: 30%;
  font-size: 8rem;
  color: ${colors.white};
  animation: ${pulsate} 1s infinite;

  &:active {
    color: ${colors.gradientLight};
    transition: all 0.3s ease;
  }

  ${media.tabPort`
    font-size: 12rem;
    bottom: 22%;
  `}
`

export default function SectionIntro (props) {
  return (
    <StyledSection>
      <StyledHero>
        <VideoCode />
        <StyledDiv>
          <AnimatedHeadingPrimary color={colors.white} text={'Brian Park'} />
          <AnimatedHeadingSub color={colors.white} size={fontSizes.small} text='Bringing products to market' />
        </StyledDiv>
        <a href='#skills'><StyledArrow className='fas fa-angle-down' /></a>
      </StyledHero>
    </StyledSection>
  )
}
