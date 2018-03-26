import React from 'react'
import styled from 'styled-components'
import { IconLabel } from 'components'
import { colors } from 'styles'
import _ from 'lodash'

const StyledDiv = styled.div`
  width: 50rem;
`

const StyledTechnologyDiv = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.white}
`

const StyledIconDiv = styled.div`
  width: 20rem;
  text-align: center;
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
        {_.map(row1Icons, (icon, index) => <StyledIconDiv><IconLabel color={colors.white} key={index} {...icon} /></StyledIconDiv>)}
      </StyledTechnologyDiv>
      <StyledTechnologyDiv>
        {_.map(row2Icons, (icon, index) => <StyledIconDiv><IconLabel color={colors.white} key={index} {...icon} /></StyledIconDiv>)}
      </StyledTechnologyDiv>
    </StyledDiv>
  )
}
