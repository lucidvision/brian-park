import React from 'react'
import { shallow } from 'enzyme'
import ImageCoastline from './ImageCoastline'
import coastlineMobile from 'assets/coastline-mobile.png'

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
