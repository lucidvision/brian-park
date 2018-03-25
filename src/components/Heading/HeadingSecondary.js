import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from 'styles'

HeadingSecondary.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired
}

HeadingSecondary.defaultProps = {
  color: colors.secondary,
  text: ''
}

const StyledHeading = styled.h1`
  color: ${props => props.color};
  font-size: 2rem;
  backface-visibility: hidden;
`

export default function HeadingSecondary (props) {
  const { text, ...rest } = props
  return (
    <StyledHeading {...rest}>{props.text}</StyledHeading>
  )
}
