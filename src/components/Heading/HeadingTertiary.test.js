import React from 'react'
import { mount } from 'enzyme'
import HeadingTertiary from './HeadingTertiary'
import { colors } from 'styles'

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
