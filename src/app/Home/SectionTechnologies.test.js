import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SectionTechnologies from './SectionTechnologies'

Enzyme.configure({adapter: new Adapter()})

describe('SectionTechnologies', () => {
  const sectionTechnologies = shallow(<SectionTechnologies />)

  it('renders correctly', () => {
    expect(sectionTechnologies).toMatchSnapshot()
  })

  it('renders a secondary heading', () => {
    expect(sectionTechnologies.find('Styled(HeadingSecondary)').props().text).toBe('Technologies')
  })

  it('renders a paragraph', () => {
    expect(sectionTechnologies.find('Styled(Paragraph)').props().text).toBe('My primary focus is JavaScript. JavaScript\'s ubiquity makes it arguably the most productive programming language. It can be used for web, mobile and APIs. It has cutting-edge tools, libraries and frameworks. Its first-class functions facilitate a declarative programming style. JavaScript empowers me to bring products to market fast.')
  })

  it('renders technology icons', () => {
    expect(sectionTechnologies.find('BarTechnologies').exists()).toBeTruthy()
  })
})
