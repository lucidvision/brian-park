import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ImageCoastline from './ImageCoastline'
import coastlineMobile from 'assets/coastline-mobile.png'

Enzyme.configure({adapter: new Adapter()})

describe('ImageCoastline', () => {
  const imageCoastline = shallow(<ImageCoastline />)

  it('renders correctly', () => {
    expect(imageCoastline).toMatchSnapshot()
  })

  it('renders img with the correct props', () => {
    expect(imageCoastline.find('img').props()).toEqual({
      src: coastlineMobile,
      alt: 'Coastline Market Mobile App'
    })
  })
})
