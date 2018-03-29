import React from 'react'
import { mount } from 'enzyme'
import IconLink from './IconLink'
import { colors } from 'styles'

const createIconLink = (override) => {
  const props = {
    url: 'www.rainbows.com',
    ...override
  }

  return mount(<IconLink {...props} />)
}

describe('IconLink', () => {
  const component = createIconLink()

  it('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  it('renders with the correct props', () => {
    expect(component.find('IconLink').props()).toEqual({
      color: colors.primary,
      url: 'www.rainbows.com'
    })
  })

  it('renders a link with the href', () => {
    expect(component.find('a').props()).toMatchObject({
      href: 'www.rainbows.com'
    })
  })

  it('renders an icon with the correct props', () => {
    expect(component.find('i').props()).toMatchObject({
      color: colors.primary
    })
  })
})
