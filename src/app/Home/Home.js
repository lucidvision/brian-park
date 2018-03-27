import React, { Component, Fragment } from 'react'
import {
  SectionIntro,
  SectionSkills,
  SectionTechnologies,
  SectionWork,
  SectionContact
} from './index'

class Home extends Component {
  render () {
    return (
      <Fragment>
        <header>
          <SectionIntro />
        </header>
        <main>
          <SectionSkills />
          <SectionTechnologies />
          <SectionWork />
        </main>
        <footer>
          <SectionContact />
        </footer>
      </Fragment>
    )
  }
}

export default Home
