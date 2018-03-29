import React from 'react'
import { mount } from 'enzyme'
import IconLabel from './IconLabel'
import { colors } from 'styles'

const createIconLabel = (override) => {
  const props = {
    label: 'Dolphins',
    ...override
  }

  return mount(<IconLabel {...props} />)
}

describe('IconLabel', () => {
  const component = createIconLabel()

  it('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  it('renders with the correct props', () => {
    expect(component.find('IconLabel').props()).toEqual({
      color: colors.primary,
      label: 'Dolphins'
    })
  })

  it('renders the icon', () => {
    expect(component.find('i').exists()).toBeTruthy()
  })

  it('renders the tertiary heading with the correct props', () => {
    expect(component.find('HeadingTertiary').props()).toEqual({
      color: colors.primary,
      text: 'Dolphins'
    })
  })
})
