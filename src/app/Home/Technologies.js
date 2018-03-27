import React from 'react'
import styled from 'styled-components'
import { IconLabel } from 'components'
import { colors, media } from 'styles'
import _ from 'lodash'

const StyledDiv = styled.div`
  width: 50%;

  ${media.phone`
    width: 100%;
  `}
`

const StyledDivTechnology = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.white}
`

const StyledDivIcon = styled.div`
  width: 100%;
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
      <StyledDivTechnology>
        {_.map(row1Icons, (icon, index) => <StyledDivIcon><IconLabel color={colors.white} key={index} {...icon} /></StyledDivIcon>)}
      </StyledDivTechnology>
      <StyledDivTechnology>
        {_.map(row2Icons, (icon, index) => <StyledDivIcon><IconLabel color={colors.white} key={index} {...icon} /></StyledDivIcon>)}
      </StyledDivTechnology>
    </StyledDiv>
  )
}
