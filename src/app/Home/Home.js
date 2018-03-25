import React, { Component, Fragment } from 'react'
import { SectionIntro, SectionSkills, SectionTechnologies, SectionContact } from './index'

class Home extends Component {
  render () {
    return (
      <Fragment>
        <SectionIntro />
        <SectionSkills />
        <SectionTechnologies />
        <SectionContact />
      </Fragment>
    )
  }
}

export default Home
