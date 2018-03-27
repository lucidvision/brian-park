import React from 'react'
import styled from 'styled-components'
import videomp4 from 'assets/HelloWorld.mp4'
import videowebm from 'assets/HelloWorld.webm'

const StyledVideo = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -1;
`

export default function VideoCode (props) {
  return (
    <StyledVideo autoPlay muted loop {...props}>
      <source src={videomp4} type='video/mp4' />
      <source src={videowebm} type='video/webm' />
      Your browser is not supported!
    </StyledVideo>
  )
}
