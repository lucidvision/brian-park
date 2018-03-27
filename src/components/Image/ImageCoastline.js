import React from 'react'
import styled from 'styled-components'
import coastlineMobile from 'assets/coastline-mobile.png'

const StyledImage = styled.img`
  height: 50%;
  width: 50%;
`

export default function ImageCoastline (props) {
  return (
    <StyledImage src={coastlineMobile} />
  )
}
