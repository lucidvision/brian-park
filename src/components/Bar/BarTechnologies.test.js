import React from 'react'
import { shallow } from 'enzyme'
import BarTechnologies from './BarTechnologies'
import { colors } from 'styles'

const icons = [
  {
    className: 'fab fa-html5',
    color: colors.white,
    label: 'HTML5'
  },
  {
    className: 'fab fa-css3-alt',
    color: colors.white,
    label: 'CSS3'
  },
  {
    className: 'fab fa-js-square',
    color: colors.white,
    label: 'ES6'
  },
  {
    className: 'fab fa-react',
    color: colors.white,
    label: 'React'
  },
  {
    className: 'fab fa-react',
    color: colors.white,
    label: 'React-Native'
  },
  {
    className: 'fab fa-node-js',
    color: colors.white,
    label: 'Node'
  }
]

describe('BarTechnologies', () => {
  const barTechnologies = shallow(<BarTechnologies />)

  it('renders correctly', () => {
    expect(barTechnologies).toMatchSnapshot()
  })

  describe('Technology Icons', () => {
    it('renders 6 icons', () => {
      expect(barTechnologies.find('IconLabel')).toHaveLength(6)
    })

    icons.forEach((props, index) => {
      it(`renders the ${props.label} icon`, () => {
        expect(barTechnologies.find('IconLabel').at(index).props()).toEqual(props)
      })
    })
  })
})
