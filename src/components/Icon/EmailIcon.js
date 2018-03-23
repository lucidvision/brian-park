import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from 'styles'

EmailIcon.propTypes = {
  color: PropTypes.string
}

EmailIcon.defaultProps = {
  color: colors.primary
}

const StyledIcon = styled.i`
  font-size: 3em;
  color: ${props => props.color}
`

export default function EmailIcon (props) {
  return (
    <a href='mailto:brianpark25@gmail.com'>
      <StyledIcon className='fa fa-envelope' {...props} />
    </a>
  )
}
