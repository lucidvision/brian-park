import React from 'react'
import { mount } from 'enzyme'
import Skill from './Skill'

const createSkill = (override) => {
  const props = {
    content: 'Rainbows',
    title: 'Unicorns',
    ...override}

  return mount(<Skill {...props} />)
}

describe('Skill', () => {
  const component = createSkill()

  it('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  it('renders with the correct props', () => {
    expect(component.find('Skill').props()).toEqual({
      content: 'Rainbows',
      title: 'Unicorns'
    })
  })

  it('renders a tertiary header with the correct text', () => {
    expect(component.find('HeadingTertiary').props()).toMatchObject({
      text: 'Unicorns'
    })
  })

  it('renders a paragraph with the correct text', () => {
    expect(component.find('Paragraph').props()).toMatchObject({
      text: 'Rainbows'
    })
  })
})
