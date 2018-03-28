import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SectionSkills from './SectionSkills'

Enzyme.configure({adapter: new Adapter()})

const skills = [
  {
    title: 'Strategy',
    content: 'A big goal requires efficient planning. I use the 80/20 rule and iterative development to deliver exceptional results.'
  },
  {
    title: 'Product',
    content: 'Customer obsession inspires elegant design. I use feedback to craft interfaces that are easy to use.'
  },
  {
    title: 'Technology',
    content: 'Optimization drives continuous improvement. I use cutting-edge tools and frameworks to write clean, scalable code.'
  }
]

describe('SectionSkills', () => {
  const sectionSkills = shallow(<SectionSkills />)

  it('renders correctly', () => {
    expect(sectionSkills).toMatchSnapshot()
  })

  it('renders a secondary heading', () => {
    expect(sectionSkills.find('Styled(HeadingSecondary)').props().text).toBe('What I do')
  })

  describe('Skills', () => {
    it('renders 3 skills', () => {
      expect(sectionSkills.find('Styled(Skill)')).toHaveLength(3)
    })

    it('renders strategy skill', () => {
      expect(sectionSkills.find('Styled(Skill)').at(0).props()).toMatchObject(skills[0])
    })

    it('renders product skill', () => {
      expect(sectionSkills.find('Styled(Skill)').at(1).props()).toMatchObject(skills[1])
    })

    it('renders technology skill', () => {
      expect(sectionSkills.find('Styled(Skill)').at(2).props()).toMatchObject(skills[2])
    })
  })
})
