import React from 'react'
import { shallow } from 'enzyme'
import VideoCode from './VideoCode'
import videomp4 from 'assets/HelloWorld.mp4'
import videowebm from 'assets/HelloWorld.webm'

describe('VideoCode', () => {
  const videoCode = shallow(<VideoCode />)

  it('renders correctly', () => {
    expect(videoCode).toMatchSnapshot()
  })

  describe('renders source with the correct props', () => {
    it('renders two sources', () => {
      expect(videoCode.find('source')).toHaveLength(2)
    })

    it('renders the code mp4 source', () => {
      expect(videoCode.find('source').at(0).props()).toEqual({
        src: videomp4,
        type: 'video/mp4'
      })
    })

    it('renders the code webm source', () => {
      expect(videoCode.find('source').at(1).props()).toEqual({
        src: videowebm,
        type: 'video/webm'
      })
    })
  })
})
