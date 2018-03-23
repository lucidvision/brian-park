import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from 'styles'

LinkedinIcon.propTypes = {
  color: PropTypes.string
}

LinkedinIcon.defaultProps = {
  color: colors.primary
}

const StyledIcon = styled.i`
  font-size: 3em;
  color: ${props => props.color};
`

export default function LinkedinIcon (props) {
  return (
    <a href='https://www.linkedin.com/in/lucidvision/'>
      <StyledIcon className='fab fa-linkedin' {...props} />
    </a>
  )
}
