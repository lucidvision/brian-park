import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import HeadingSecondary from './HeadingSecondary'
import { colors } from 'styles'

Enzyme.configure({adapter: new Adapter()})

const createHeadingSecondary = (override) => {
  const props = {
    text: 'Unicorns',
    ...override
  }

  return mount(<HeadingSecondary {...props} />)
}

describe('HeadingSecondary', () => {
  const component = createHeadingSecondary()

  it('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  it('renders with the correct props', () => {
    expect(component.find('HeadingSecondary').props()).toEqual({
      color: colors.primary,
      text: 'Unicorns'
    })
  })

  it('renders h2 with the correct text', () => {
    expect(component.find('h2').props().children).toBe('Unicorns')
  })
})
