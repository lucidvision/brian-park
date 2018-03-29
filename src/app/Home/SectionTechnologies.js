import React from 'react'
import styled from 'styled-components'
import { HeadingSecondary, Paragraph, BarTechnologies } from 'components'
import { colors, media, utilities } from 'styles'

const StyledSection = styled.section`
  background-image: linear-gradient(
    to right bottom,
    ${colors.gradientLight},
    ${colors.gradientDark});
  background-size: cover;
  transform: skewY(-7deg);

  & > * {
    transform: skewY(7deg);
  }
`

const StyledHeadingSecondary = styled(HeadingSecondary)`
  text-align: center;
  margin-bottom: ${utilities.marginLarge}

  ${media.tabPort`
    margin-bottom: ${utilities.marginMedium};
  `}
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.desktop`
    max-width: 112.5rem;
    margin: auto;
  `}

  ${media.phone`
    flex-direction: column;
  `}
`

const StyledParagraph = styled(Paragraph)`
  max-width: 50rem;

  ${media.phone`
    margin-bottom: ${utilities.marginMedium}
    text-align: center;
  `}
`

export default function SectionTechnologies (props) {
  return (
    <StyledSection>
      <StyledHeadingSecondary color={colors.white} text='Technologies' />
      <StyledDiv className='wow fadeIn'>
        <StyledParagraph color={colors.white} text={'My primary focus is JavaScript. JavaScript\'s ubiquity makes it arguably the most productive programming language. It can be used for web, mobile and APIs. It has cutting-edge tools, libraries and frameworks. Its first-class functions facilitate a declarative programming style. JavaScript empowers me to bring products to market fast.'} />
        <BarTechnologies />
      </StyledDiv>
    </StyledSection>
  )
}
