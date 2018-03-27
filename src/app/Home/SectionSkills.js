import React from 'react'
import styled from 'styled-components'
import { HeadingSecondary, Skill } from 'components'
import { utilities } from 'styles'
import _ from 'lodash'

const StyledSection = styled.section`
  padding: 12rem 10rem;
  margin-top: -10rem;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledHeadingSecondary = styled(HeadingSecondary)`
  text-align: center;
  margin-bottom: ${utilities.marginLarge}
`

const skills = [
  {
    title: 'Strategy',
    content: 'A big goal requires efficient planning. I use the 80/20 rule and iterative development to deliver exceptional results.'
  },
  {
    title: 'Product',
    content: 'Customer obsession inspires elegant design. I use feedback to craft interfaces that are easy to use.'
  },
  {
    title: 'Technology',
    content: 'Optimization drives continuous improvement. I use cutting-edge frameworks and tools for clean, scalable code.'
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
