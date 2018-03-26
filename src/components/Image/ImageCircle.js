import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

ImageCircle.propTypes = {
  imagePath: PropTypes.string.isRequired
}

ImageCircle.defaultProps = {
  imagePath: ''
}

const StyledDiv = styled.div`
  display: inline-block;
  width: 12rem;
  height: 12rem;
  overflow: hidden;
  clip-path: circle(50% at 50% 50%);
`

const StyledImg = styled.img`
  height: 100%;
  transform: translateY(2rem) scale(1.4)
`

export default function ImageCircle (props) {
  return (
    <StyledDiv>
      <StyledImg src={props.imagePath} />
    </StyledDiv>
  )
}
