import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from 'styles'

FacebookIcon.propTypes = {
  color: PropTypes.string
}

FacebookIcon.defaultProps = {
  color: colors.primary
}

const StyledIcon = styled.i`
  font-size: 3em;
  color: ${props => props.color};
`

export default function FacebookIcon (props) {
  return (
    <a href='https://www.facebook.com/Lucid.Vision'>
      <StyledIcon className='fab fa-facebook' {...props} />
    </a>
  )
}
