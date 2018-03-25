import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from 'styles'

HeadingPrimary.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired
}

HeadingPrimary.defaultProps = {
  color: colors.primary,
  text: ''
}

const StyledHeading = styled.h1`
  color: ${props => props.color};
  font-size: 4rem;
  backface-visibility: hidden;
`

export default function HeadingPrimary (props) {
  const { text, ...rest } = props
  return (
    <StyledHeading {...rest}>{props.text}</StyledHeading>
  )
}
