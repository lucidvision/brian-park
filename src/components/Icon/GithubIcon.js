import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from 'styles'

GithubIcon.propTypes = {
  color: PropTypes.string
}

GithubIcon.defaultProps = {
  color: colors.primary
}

const StyledIcon = styled.i`
  font-size: 3em;
  color: ${props => props.color};
`

export default function GithubIcon (props) {
  return (
    <a href='https://github.com/lucidvision'>
      <StyledIcon className='fab fa-github' {...props} />
    </a>
  )
}
