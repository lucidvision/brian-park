import React from 'react'
import styled from 'styled-components'
import { HeadingSecondary, Skill } from 'components'
import { utilities } from 'styles'
import _ from 'lodash'

const StyledSection = styled.section`
  padding: 14rem 10rem;
  margin-top: -10rem;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledHeadingSecondary = styled(HeadingSecondary)`
  text-align: center;
  margin-bottom: ${utilities.marginBottomLarge}
`

const skills = [
  {
    title: 'Strategy',
    content: 'A big goal drives efficient planning. I use the 80/20 rule and iterative development to deliver exceptional results.'
  },
  {
    title: 'Product',
    content: 'Customer obsession inspires elegant design. I use feedback to craft simple interfaces that are easy to use.'
  },
  {
    title: 'Technology',
    content: 'Optimization demands continuous improvement. I use cutting-edge tools and frameworks for clean, scalable code.'
  }
]

export default function SectionSkills (props) {
  return (
    <StyledSection>
      <StyledHeadingSecondary text='What I do' />
      <StyledDiv>
        {_.map(skills, (skill, index) => <Skill key={index} {...skill} />)}
      </StyledDiv>
    </StyledSection>
  )
}
