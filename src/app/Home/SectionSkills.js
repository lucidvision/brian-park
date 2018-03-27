import React from 'react'
import styled from 'styled-components'
import { HeadingSecondary, Skill } from 'components'
import { media, utilities } from 'styles'
import _ from 'lodash'

const StyledSection = styled.section`
  margin-top: -10rem;

  ${media.phone`
    margin-top: -4rem;
  `}
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.phone`
    flex-direction: column;
    align-items: center;

    > * {
      &:not(:last-child) {
        margin-bottom: ${utilities.marginMedium};
      }
    }
  `}
`

const StyledHeadingSecondary = styled(HeadingSecondary)`
  text-align: center;
  margin-bottom: ${utilities.marginLarge};

  ${media.phone`
    margin-bottom: ${utilities.marginMedium};
  `}
`

const StyledSkill = styled(Skill)`
  width: 30%;

  ${media.phone`
    width: 90%;
  `}
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
    content: 'Optimization drives continuous improvement. I use cutting-edge frameworks and tools to write clean, scalable code.'
  }
]

export default function SectionSkills (props) {
  return (
    <StyledSection>
      <StyledHeadingSecondary text='What I do' />
      <StyledDiv>
        {_.map(skills, (skill, index) => <StyledSkill key={index} {...skill} />)}
      </StyledDiv>
    </StyledSection>
  )
}
