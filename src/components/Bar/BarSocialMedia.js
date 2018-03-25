import React from 'react'
import styled from 'styled-components'
import { IconLink } from 'components'
import _ from 'lodash'

const StyledDiv = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const links = [
  {
    className: 'fab fa-linkedin',
    url: 'https://www.linkedin.com/in/lucidvision/'
  },
  {
    className: 'fab fa-angellist',
    url: 'https://angel.co/brian-park-11'
  },
  {
    className: 'fab fa-github',
    url: 'https://github.com/lucidvision'
  },
  {
    className: 'fab fa-facebook',
    url: 'https://www.facebook.com/Lucid.Vision'
  },
  {
    className: 'fa fa-envelope',
    url: 'mailto:brianpark25@gmail.com'
  }
]

export default function BarSocialMedia (props) {
  return (
    <StyledDiv>
      {_.map(links, (link, index) => <IconLink key={index} {...link} />)}
    </StyledDiv>
  )
}
