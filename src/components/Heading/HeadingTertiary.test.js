import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import HeadingTertiary from './HeadingTertiary'
import { colors } from 'styles'

Enzyme.configure({adapter: new Adapter()})

const createHeadingTertiary = (override) => {
  const props = {
    text: 'Unicorns',
    ...override
  }

  return mount(<HeadingTertiary {...props} />)
}

describe('HeadingTertiary', () => {
  const component = createHeadingTertiary()

  it('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  it('renders with the correct props', () => {
    expect(component.find('HeadingTertiary').props()).toEqual({
      color: colors.primary,
      text: 'Unicorns'
    })
  })

  it('renders h3 with the correct text', () => {
    expect(component.find('h3').props().children).toBe('Unicorns')
  })
})
