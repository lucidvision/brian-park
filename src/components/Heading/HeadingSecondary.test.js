import React from 'react'
import { mount } from 'enzyme'
import HeadingSecondary from './HeadingSecondary'
import { colors } from 'styles'

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
