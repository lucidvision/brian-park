import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { HeadingSecondary, Paragraph } from 'components'

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

Skill.defaultProps = {
  title: '',
  content: ''
}

const StyledDiv = styled.div`
  height: 15rem;
  width: 20rem;
`

export default function Skill (props) {
  return (
    <StyledDiv>
      <HeadingSecondary text={props.title} />
      <Paragraph text={props.content} />
    </StyledDiv>
  )
}
