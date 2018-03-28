import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Paragraph from './Paragraph'
import { colors, fontSizes } from 'styles'

Enzyme.configure({adapter: new Adapter()})

const createParagraph = (override) => {
  const props = {
    text: 'Unicorns',
    ...override
  }

  return mount(<Paragraph {...props} />)
}

describe('Paragraph', () => {
  const component = createParagraph()

  it('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  it('renders with the correct props', () => {
    expect(component.find('Paragraph').props()).toEqual({
      color: colors.primary,
      size: fontSizes.default,
      text: 'Unicorns'
    })
  })

  it('renders p with the correct text', () => {
    expect(component.find('p').props().children).toBe('Unicorns')
  })
})
