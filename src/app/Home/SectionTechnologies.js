import React from 'react'
import styled from 'styled-components'
import Technologies from './Technologies'
import { HeadingPrimary, Paragraph } from 'components'
import { utilities } from 'styles'

const StyledSection = styled.section`
  padding: 10rem;
`

const StyledHeadingPrimary = styled(HeadingPrimary)`
  text-align: center;
  margin-bottom: ${utilities.marginBottomMedium}
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
      <StyledHeadingPrimary text='Technologies I use' />
      <StyledDiv>
        <StyledParagraph text={'My primary focus is JavaScript. JavaScript\'s ubiquity makes it arguably the most productive programming language. It can be used for web, mobile and APIs. It has powerful frameworks, libraries and tools. It\'s first-class functions allows for a declarative programming style. JavaScript empowers me to move fast and break things.'} />
        <Technologies />
      </StyledDiv>
    </StyledSection>
  )
}
