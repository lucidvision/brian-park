import React from 'react'
import { shallow } from 'enzyme'
import SectionWork from './SectionWork'

describe('SectionWork', () => {
  const sectionWork = shallow(<SectionWork />)

  it('renders correctly', () => {
    expect(sectionWork).toMatchSnapshot()
  })

  it('renders a secondary heading', () => {
    expect(sectionWork.find('Styled(HeadingSecondary)').props().text).toBe('Coastline Market')
  })

  describe('Paragraphs', () => {
    it('renders 3 paragraphs', () => {
      expect(sectionWork.find('Paragraph')).toHaveLength(3)
    })

    it('renders first paragraph', () => {
      expect(sectionWork.find('Paragraph').at(0).props().text).toBe('As CTO, I led the development of Coastline\'s "Harvest-on-Demand" platform, providing e-commerce and logistics automation for the seafood industry. The technology includes a mobile app, a web app and a web-services API.')
    })

    it('renders second paragraph', () => {
      expect(sectionWork.find('Paragraph').at(1).props().text).toBe('Coastline uses cross-platform JavaScript powered by React, React-Native and Express to respond rapidly to customer feedback. Coastline also leverages powerful technologies like Stripe, SendGrid, Twilio, Routific, Heroku and Firebase to maximize its value proposition.')
    })

    it('renders third paragraph', () => {
      expect(sectionWork.find('Paragraph').at(2).props().text).toBe('Through an iterative development process, Coastline delights customers with accurate design and product-market fit.')
    })
  })

  it('renders the coastline app image', () => {
    expect(sectionWork.find('Styled(ImageCoastline)').exists()).toBeTruthy()
  })
})
