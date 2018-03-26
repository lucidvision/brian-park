import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { HeadingTertiary, Paragraph } from 'components'

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

Skill.defaultProps = {
  title: '',
  content: ''
}

const StyledDiv = styled.div`
  height: 22rem;
  width: 30rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, .8);
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, .15);
`

export default function Skill (props) {
  return (
    <StyledDiv>
      <HeadingTertiary text={props.title} />
      <Paragraph text={props.content} />
    </StyledDiv>
  )
}
