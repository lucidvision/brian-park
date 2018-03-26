import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, fontSizes } from 'styles'

HeadingSecondary.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired
}

HeadingSecondary.defaultProps = {
  color: colors.primary,
  text: ''
}

const StyledHeading = styled.h1`
  color: ${props => props.color};
  font-size: ${fontSizes.medium};
  text-transform: uppercase;
  letter-spacing: .5rem;
`

export default function HeadingSecondary (props) {
  const { text, ...rest } = props
  return (
    <StyledHeading {...rest}>{props.text}</StyledHeading>
  )
}
