import React from 'react'
import styled from 'styled-components'
import { HeadingPrimary, Skill } from 'components'
import { utilities } from 'styles'
import _ from 'lodash'

const StyledSection = styled.section`
  padding: 10rem;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledHeadingPrimary = styled(HeadingPrimary)`
  text-align: center;
  margin-bottom: ${utilities.marginBottomMedium}
`

const skills = [
  {
    title: 'Strategy',
    content: 'Big goals drives efficient planning. I use the 80/20 rule and iterative development to produce results.'
  },
  {
    title: 'Product',
    content: 'Customer obsession inspires elegant design. I use feedback to craft beautiful interfaces that are simple to use.'
  },
  {
    title: 'Technology',
    content: 'Optimization demands continuous improvement. I use cutting-edge tools and frameworks for clean, scalable code.'
  },
  {
    title: 'Collaboration',
    content: 'Shared dreams become a reality. I use empathy and open communication to empower the team.'
  }
]

export default function SectionSkills (props) {
  return (
    <StyledSection>
      <StyledHeadingPrimary text='What I do' />
      <StyledDiv>
        {_.map(skills, (skill, index) => <Skill key={index} {...skill} />)}
      </StyledDiv>
    </StyledSection>
  )
}
