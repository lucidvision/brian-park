import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, fontSizes } from 'styles'

HeadingTertiary.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired
}

HeadingTertiary.defaultProps = {
  color: colors.primary,
  text: ''
}

const StyledHeading = styled.h1`
  color: ${props => props.color};
  font-size: ${fontSizes.small};
`

export default function HeadingTertiary (props) {
  const { text, ...rest } = props
  return (
    <StyledHeading {...rest}>{props.text}</StyledHeading>
  )
}
