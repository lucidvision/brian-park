import React, { Component, Fragment } from 'react'
import { SectionIntro, SectionContact } from './index'

class Home extends Component {
  render () {
    return (
      <Fragment>
        <SectionIntro />
        <SectionContact />
      </Fragment>
    )
  }
}

export default Home
