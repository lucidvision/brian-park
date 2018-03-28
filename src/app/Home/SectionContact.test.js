import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SectionContact from './SectionContact'

Enzyme.configure({adapter: new Adapter()})

describe('SectionContact', () => {
  const sectionContact = shallow(<SectionContact />)

  it('renders correctly', () => {
    expect(sectionContact).toMatchSnapshot()
  })

  it('renders a styled social media bar', () => {
    expect(sectionContact.find('Styled(BarSocialMedia)').exists()).toBeTruthy()
  })
})
