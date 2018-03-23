import React from 'react'
import { AngellistIcon, LinkedinIcon, GithubIcon, FacebookIcon, EmailIcon } from 'components'
import styled from 'styled-components'

const StyledDiv = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export default function BarSocialMedia (props) {
  return (
    <StyledDiv>
      <LinkedinIcon />
      <AngellistIcon />
      <GithubIcon />
      <FacebookIcon />
      <EmailIcon />
    </StyledDiv>
  )
}
