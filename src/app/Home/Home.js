import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import {
  SectionIntro,
  SectionSkills,
  SectionTechnologies,
  SectionWork,
  SectionContact
} from './index'
import { media } from 'styles'

const StyledMain = styled.main`
  & > * {
    padding: 12rem 10rem;

    ${media.tabLand`
      padding: 12rem 6rem;
    `}

    ${media.tabPort`
      padding: 10rem 4rem;
    `}

    ${media.phone`
      padding: 8rem 2rem;
    `}
  }
`

class Home extends Component {
  render () {
    return (
      <Fragment>
        <header>
          <SectionIntro />
        </header>
        <StyledMain>
          <SectionSkills />
          <SectionTechnologies />
          <SectionWork />
        </StyledMain>
        <footer>
          <SectionContact />
        </footer>
      </Fragment>
    )
  }
}

export default Home
