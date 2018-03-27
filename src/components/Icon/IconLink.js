import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from 'styles'

IconLink.propTypes = {
  className: PropTypes.string.isRequired,
  color: PropTypes.string,
  url: PropTypes.string.isRequired
}

IconLink.defaultProps = {
  className: '',
  color: colors.primary,
  url: ''
}

const StyledIcon = styled.i`
  font-size: 3.5em;
  color: ${props => props.color}
`

export default function IconLink (props) {
  const { url, ...rest } = props
  return (
    <a href={props.url}>
      <StyledIcon {...rest} />
    </a>
  )
}
