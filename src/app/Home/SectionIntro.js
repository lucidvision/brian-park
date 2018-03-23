import React from 'react'
import styled from 'styled-components'
import { HeadingPrimary, ImageCircle, Paragraph } from 'components'
import brian from 'assets/brian.jpg'

const StyledSection = styled.section`
  text-align: center;
`

export default function SectionIntro (props) {
  return (
    <StyledSection>
      <ImageCircle imagePath={brian} />
      <HeadingPrimary text={'Hi, I\'m Brian'} />
      <Paragraph primary text='I have a passion for bringing products to market - from product management to software engineering.' />
    </StyledSection>
  )
}
