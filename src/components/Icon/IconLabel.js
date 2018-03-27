import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { HeadingTertiary } from 'components'
import { colors } from 'styles'

IconLabel.propTypes = {
  className: PropTypes.string.isRequired,
  color: PropTypes.string,
  label: PropTypes.string.isRequired
}

IconLabel.defaultProps = {
  className: '',
  color: colors.primary,
  label: ''
}

const StyledSpan = styled.span`
  text-align: center;
`

const StyledIcon = styled.i`
  font-size: 6em;
  color: ${props => props.color}
`

export default function IconLabel (props) {
  return (
    <StyledSpan>
      <StyledIcon className={props.className} {...props} />
      <HeadingTertiary color={props.color} text={props.label} />
    </StyledSpan>
  )
}
