import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, fontSizes } from 'styles'

HeadingPrimary.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string.isRequired
}

HeadingPrimary.defaultProps = {
  color: colors.primary,
  size: fontSizes.large,
  text: ''
}

const StyledHeading = styled.h1`
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1.5rem;
`

export default function HeadingPrimary (props) {
  const { text, ...rest } = props
  return (
    <StyledHeading {...rest}>{props.text}</StyledHeading>
  )
}
