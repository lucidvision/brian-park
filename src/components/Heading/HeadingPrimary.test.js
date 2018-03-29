import React from 'react'
import { mount } from 'enzyme'
import HeadingPrimary from './HeadingPrimary'
import { colors, fontSizes } from 'styles'

const createHeadingPrimary = (override) => {
  const props = {
    text: 'Unicorns',
    ...override
  }

  return mount(<HeadingPrimary {...props} />)
}

describe('HeadingPrimary', () => {
  const headingPrimary = createHeadingPrimary()

  it('renders correctly', () => {
    expect(headingPrimary).toMatchSnapshot()
  })

  it('renders with the correct props', () => {
    expect(headingPrimary.find('HeadingPrimary').props()).toEqual({
      color: colors.primary,
      size: fontSizes.large,
      text: 'Unicorns'
    })
  })

  it('renders an h1 with the correct text', () => {
    expect(headingPrimary.find('h1').props().children).toBe('Unicorns')
  })
})
