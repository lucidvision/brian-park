import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import VideoCode from './VideoCode'
import videomp4 from 'assets/HelloWorld.mp4'
import videowebm from 'assets/HelloWorld.webm'

Enzyme.configure({adapter: new Adapter()})

describe('VideoCode', () => {
  const videoCode = shallow(<VideoCode />)

  it('renders correctly', () => {
    expect(videoCode).toMatchSnapshot()
  })

  describe('renders source with the correct props', () => {
    it('renders two sources', () => {
      expect(videoCode.find('source')).toHaveLength(2)
    })

    it('renders a mp4 source', () => {
      expect(videoCode.find('source').at(0).props()).toEqual({
        src: videomp4,
        type: 'video/mp4'
      })
    })

    it('renders a webm source', () => {
      expect(videoCode.find('source').at(1).props()).toEqual({
        src: videowebm,
        type: 'video/webm'
      })
    })
  })
})
