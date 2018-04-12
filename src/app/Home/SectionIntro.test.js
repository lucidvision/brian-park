import React from 'react'
import { shallow } from 'enzyme'
import SectionIntro from './SectionIntro'

describe('SectionIntro', () => {
  const sectionIntro = shallow(<SectionIntro />)

  it('renders correctly', () => {
    expect(sectionIntro).toMatchSnapshot()
  })

  it('renders the video component', () => {
    expect(sectionIntro.find('VideoCode').exists()).toBeTruthy()
  })

  it('renders a primary heading', () => {
    expect(sectionIntro.find('Styled(HeadingPrimary)').at(0).props().text).toBe('Brian Park')
  })

  it('renders a sub heading', () => {
    expect(sectionIntro.find('Styled(HeadingPrimary)').at(1).props().text).toBe('Bringing products to market')
  })

  it('renders a cta arrow', () => {
    expect(sectionIntro.find('a').props().children.props.className).toBe('fas fa-angle-down')
  })
})
