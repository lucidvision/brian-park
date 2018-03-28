import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SectionIntro from './SectionIntro'

Enzyme.configure({adapter: new Adapter()})

describe('SectionIntro', () => {
  const sectionIntro = shallow(<SectionIntro />)

  it('renders correctly', () => {
    expect(sectionIntro).toMatchSnapshot()
  })

  it('renders the video component', () => {
    expect(sectionIntro.find('VideoCode').exists()).toBe(true)
  })

  it('renders a primary heading', () => {
    expect(sectionIntro.find('Styled(HeadingPrimary)').at(0).props().text).toEqual('Brian Park')
  })

  it('renders a sub heading', () => {
    expect(sectionIntro.find('Styled(HeadingPrimary)').at(1).props().text).toEqual('Bringing products to market')
  })
})
