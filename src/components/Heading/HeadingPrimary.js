import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

HeadingPrimary.propTypes = {
  text: PropTypes.string.isRequired
}

HeadingPrimary.defaultProps = {
  text: ''
}

const StyledHeading = styled.h1`
  font-size: 4rem;
  backface-visibility: hidden;
`

export default function HeadingPrimary (props) {
  return (
    <StyledHeading>{props.text}</StyledHeading>
  )
}
