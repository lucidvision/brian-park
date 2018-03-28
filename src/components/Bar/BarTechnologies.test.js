import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import BarTechnologies from './BarTechnologies'
import { colors } from 'styles'

Enzyme.configure({adapter: new Adapter()})

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
      expect(barTechnologies.find('IconLabel').length).toEqual(6)
    })

    icons.forEach((props, index) => {
      it(`renders the ${props.label} icon`, () => {
        expect(barTechnologies.find('IconLabel').at(index).props()).toEqual(props)
      })
    })
  })
})
