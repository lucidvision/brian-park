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
  margin-top: 10rem;

  ${media.phone`
    margin-top: 0;
    text-align: center;
  `}
`

export default function SectionWork (props) {
  return (
    <section>
      <StyledHeadingSecondary text='Coastline Market' />
      <StyledDiv>
        <StyledDivInfo>
          <Paragraph text={'As CTO, I led the development of Coastline\'s "Harvest-on-Demand" technology. This platform provides e-commerce and logistics automation for Coastline\'s seafood business. It includes a mobile app, a web app and a web-services API.'} /><br />
          <Paragraph text={'Coastline employs a cross-platform JavaScript stack powered by React, React-Native and Express to respond rapidly to customer feedback. By leveraging powerful technologies like Stripe, SendGrid, Twilio, Routific, Heroku and Firebase, Coastline extends its value proposition.'} /><br />
          <Paragraph text={'Through an iterative development process, Coastline delights customers with accurate design and product-market fit.'} /><br />
        </StyledDivInfo>
        <ImageCoastline />
      </StyledDiv>
    </section>
  )
}
