import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { WOW } from 'wowjs'
import {
  SectionIntro,
  SectionSkills,
  SectionTechnologies,
  SectionWork,
  SectionContact
} from './index'
import { media } from 'styles'

const StyledMain = styled.main`
  overflow-x: hidden;

  & > * {
    padding: 14rem 10rem;

    ${media.desktop`
      padding: 18rem 10rem;
    `}

    ${media.tabLand`
      padding: 12rem 8rem;
    `}

    ${media.tabPort`
      padding: 12rem 4rem;
    `}

    ${media.phone`
      padding: 8rem 2rem;
    `}
  }
`

class Home extends Component {
  componentDidMount () {
    new WOW({
      live: false
    }).init()
  }
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
