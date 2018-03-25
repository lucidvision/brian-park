import React from 'react'
import styled from 'styled-components'
import { HeadingPrimary, ImageCircle, Paragraph } from 'components'
import { colors } from 'styles'
import brian from 'assets/brian.jpg'

const StyledHeader = styled.header`
  height: 95vh;
  text-align: center;
  background-image: linear-gradient(to right bottom, rgba(126, 213, 111, 0.8), rgba(40, 180, 133, 0.8));
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
      <StyledDiv>
        <ImageCircle imagePath={brian} />
        <HeadingPrimary color={colors.white} text={'Hello world!'} />
        <Paragraph color={colors.white} text={'My name is Brian and I\'m JavaScript developer for web and mobile.'} />
        <Paragraph color={colors.white} text='I have a passion for taking ideas to market - from product management to software engineering.' />
      </StyledDiv>
    </StyledHeader>
  )
}
