import React from 'react'
import styled from 'styled-components'
import Technologies from './Technologies'
import { HeadingSecondary, Paragraph } from 'components'
import { colors, utilities } from 'styles'

const StyledSection = styled.section`
  padding: 14rem 10rem;
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
  margin-bottom: ${utilities.marginBottomLarge}
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledParagraph = styled(Paragraph)`
  width: 50rem;
`

export default function SectionTechnologies (props) {
  return (
    <StyledSection>
      <StyledHeadingSecondary color={colors.white} text='Technologies I use' />
      <StyledDiv>
        <StyledParagraph color={colors.white} text={'My primary focus is JavaScript. JavaScript\'s ubiquity makes it arguably the most productive programming language. It can be used for web, mobile and APIs. It has powerful frameworks, libraries and tools. Its first-class functions allows for a declarative programming style. JavaScript empowers me to move fast and break things.'} />
        <Technologies />
      </StyledDiv>
    </StyledSection>
  )
}
