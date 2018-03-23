import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from 'styles'

AngellistIcon.propTypes = {
  color: PropTypes.color
}

AngellistIcon.defaultProps = {
  color: colors.primary
}

const StyledIcon = styled.i`
  font-size: 3em;
  color: ${props => props.color}
`

export default function AngellistIcon (props) {
  return (
    <a href='https://angel.co/brian-park-11'>
      <StyledIcon className='fab fa-angellist' {...props} />
    </a>
  )
}
