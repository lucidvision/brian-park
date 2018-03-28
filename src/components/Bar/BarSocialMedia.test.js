import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import BarSocialMedia from './BarSocialMedia'
import { colors } from 'styles'

Enzyme.configure({adapter: new Adapter()})

const links = [
  {
    className: 'fab fa-linkedin',
    color: colors.white,
    url: 'https://www.linkedin.com/in/lucidvision/'
  },
  {
    className: 'fab fa-angellist',
    color: colors.white,
    url: 'https://angel.co/brian-park-11'
  },
  {
    className: 'fab fa-github',
    color: colors.white,
    url: 'https://github.com/lucidvision'
  },
  {
    className: 'fab fa-facebook',
    color: colors.white,
    url: 'https://www.facebook.com/Lucid.Vision'
  },
  {
    className: 'fa fa-envelope',
    color: colors.white,
    url: 'mailto:brianpark25@gmail.com'
  }
]

describe('BarSocialMedia', () => {
  const barSocialMedia = shallow(<BarSocialMedia />)

  it('renders correctly', () => {
    expect(barSocialMedia).toMatchSnapshot()
  })

  describe('Social Media Links', () => {
    it('renders 5 links', () => {
      expect(barSocialMedia.find('IconLink').length).toEqual(5)
    })

    links.forEach((props, index) => {
      it(`renders the ${props.url} link`, () => {
        expect(barSocialMedia.find('IconLink').at(index).props()).toEqual(props)
      })
    })
  })
})
