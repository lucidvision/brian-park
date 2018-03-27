import React from 'react'
import styled from 'styled-components'
import { HeadingSecondary, ImageCoastline, Paragraph } from 'components'
import { media, utilities } from 'styles'

const StyledHeadingSecondary = styled(HeadingSecondary)`
  text-align: center;
  margin-bottom: 1rem;

  ${media.phone`
    margin-bottom: ${utilities.marginMedium};
  `}
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: -4rem;

  ${media.phone`
    flex-direction: column;
    align-items: center;
    margin-right: 0;
  `}
`

const StyledDivInfo = styled.div`
  margin-top: 8rem;

  ${media.tabLand`
    margin-top: 6rem;
  `}

  ${media.tabPort`
    margin-top: 4rem;
  `}

  ${media.phone`
    margin-top: 0;
    text-align: center;
  `}
`

const StyledImageCoastline = styled(ImageCoastline)`
  height: 50%;
  width: 50%

  ${media.phone`
    height: 100%;
    width: 100%;
  `}
`

export default function SectionWork (props) {
  return (
    <section>
      <StyledHeadingSecondary text='Coastline Market' />
      <StyledDiv>
        <StyledDivInfo>
          <Paragraph text={'As CTO, I led the development of Coastline\'s "Harvest-on-Demand" platform, providing e-commerce and logistics automation for the seafood industry. The technology includes a mobile app, a web app and a web-services API.'} /><br />
          <Paragraph text={'Coastline uses cross-platform JavaScript powered by React, React-Native and Express to respond rapidly to customer feedback. Coastline also leverages powerful technologies like Stripe, SendGrid, Twilio, Routific, Heroku and Firebase to maximize its value proposition.'} /><br />
          <Paragraph text={'Through an iterative development process, Coastline delights customers with accurate design and product-market fit.'} /><br />
        </StyledDivInfo>
        <StyledImageCoastline />
      </StyledDiv>
    </section>
  )
}
