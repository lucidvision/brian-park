import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { HeadingTertiary, Paragraph } from 'components'
import { utilities } from 'styles'

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

Skill.defaultProps = {
  title: '',
  content: ''
}

const StyledDiv = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, .8);
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, .15);

  &:hover {
    transform: translateY(-1.5rem) scale(1.03);
  }

  & > h3 {
    margin-bottom: ${utilities.marginSmall};
  }
`

export default function Skill (props) {
  const { content, title, ...rest } = props
  return (
    <StyledDiv {...rest}>
      <HeadingTertiary text={title} />
      <Paragraph text={content} />
    </StyledDiv>
  )
}
