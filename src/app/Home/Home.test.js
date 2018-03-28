import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'

Enzyme.configure({adapter: new Adapter()})

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
