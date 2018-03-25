import React from 'react'
import styled from 'styled-components'
import { IconLabel } from 'components'
import _ from 'lodash'

const StyledDiv = styled.div`
  width: 40rem;
`

const StyledTechnologyDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

const row1Icons = [
  {
    className: 'fab fa-html5',
    label: 'HTML5'
  },
  {
    className: 'fab fa-css3-alt',
    label: 'CSS3'
  },
  {
    className: 'fab fa-js-square',
    label: 'ES6'
  }
]

const row2Icons = [
  {
    className: 'fab fa-react',
    label: 'React'
  },
  {
    className: 'fab fa-react',
    label: 'React-Native'
  },
  {
    className: 'fab fa-node-js',
    label: 'Node'
  }
]

export default function Technologies (props) {
  return (
    <StyledDiv>
      <StyledTechnologyDiv>
        {_.map(row1Icons, (icon, index) => <IconLabel key={index} {...icon} />)}
      </StyledTechnologyDiv>
      <StyledTechnologyDiv>
        {_.map(row2Icons, (icon, index) => <IconLabel key={index} {...icon} />)}
      </StyledTechnologyDiv>
    </StyledDiv>
  )
}
