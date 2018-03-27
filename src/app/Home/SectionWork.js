import React from 'react'
import styled from 'styled-components'
import { HeadingSecondary, ImageCoastline, Paragraph } from 'components'

const StyledSection = styled.section`
  padding: 12rem 10rem 5rem 10rem;
`

const StyledHeadingSecondary = styled(HeadingSecondary)`
  text-align: center;
  margin-bottom: 1rem;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: -4rem;
`

const StyledDivInfo = styled.div`
  max-width: 50rem;
  margin-top: 10rem;
`

export default function SectionWork (props) {
  return (
    <StyledSection>
      <StyledHeadingSecondary text='Coastline Market' />
      <StyledDiv>
        <StyledDivInfo>
          <Paragraph text={'As CTO, I led the development of Coastline\'s "Harvest-on-Demand" technology. This platform provides e-commerce and logistics automation for Coastline\'s seafood business. It includes a mobile app, a web app and a web-services API.'} /><br />
          <Paragraph text={'Coastline employs a cross-platform JavaScript stack powered by React, React-Native and Express to respond rapidly to customer feedback. Coastline also leverages powerful technologies like Stripe, SendGrid, Twilio, Routific, Heroku and Firebase to extend its value proposition.'} /><br />
          <Paragraph text={'Through an iterative development process, Coastline delights customers with accurate design and product-market fit.'} /><br />
        </StyledDivInfo>
        <ImageCoastline />
      </StyledDiv>
    </StyledSection>
  )
}
