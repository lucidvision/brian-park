import React from 'react'
import { shallow } from 'enzyme'
import SectionContact from './SectionContact'

describe('SectionContact', () => {
  const sectionContact = shallow(<SectionContact />)

  it('renders correctly', () => {
    expect(sectionContact).toMatchSnapshot()
  })

  it('renders a styled social media bar', () => {
    expect(sectionContact.find('Styled(BarSocialMedia)').exists()).toBeTruthy()
  })
})
