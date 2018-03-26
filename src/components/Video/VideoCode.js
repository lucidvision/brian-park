import React from 'react'
import styled from 'styled-components'
import videomp4 from 'assets/HelloWorld.mp4'
import videowebm from 'assets/HelloWorld.webm'

const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  overflow: hidden;
`

const StyledVideo = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export default function VideoCode (props) {
  return (
    <StyledDiv>
      <StyledVideo autoPlay muted loop>
        <source src={videomp4} type='video/mp4' />
        <source src={videowebm} type='video/webm' />
        Your browser is not supported!
      </StyledVideo>
    </StyledDiv>
  )
}
