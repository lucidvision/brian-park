import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, fontSizes } from 'styles'

Paragraph.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string.isRequired
}

Paragraph.defaultProps = {
  color: colors.primary,
  size: fontSizes.default,
  text: ''
}

const StyledParagraph = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.size};
`

export default function Paragraph (props) {
  const { text, ...rest } = props
  return (
    <StyledParagraph {...rest}>{text}</StyledParagraph>
  )
}
