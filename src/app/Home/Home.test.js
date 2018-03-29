import React from 'react'
import { shallow } from 'enzyme'
import Home from './Home'

describe('Home', () => {
  const home = shallow(<Home />)

  it('renders correctly', () => {
    expect(home).toMatchSnapshot()
  })

  it('renders the intro section', () => {
    expect(home.find('SectionIntro').exists()).toBeTruthy()
  })

  it('renders the skills section', () => {
    expect(home.find('SectionSkills').exists()).toBeTruthy()
  })

  it('renders the technologies section', () => {
    expect(home.find('SectionTechnologies').exists()).toBeTruthy()
  })

  it('renders the work section', () => {
    expect(home.find('SectionWork').exists()).toBeTruthy()
  })

  it('renders the contact section', () => {
    expect(home.find('SectionContact').exists()).toBeTruthy()
  })
})
