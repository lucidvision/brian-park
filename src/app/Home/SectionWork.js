import React from 'react'
import styled from 'styled-components'
import { HeadingSecondary, ImageCoastline, Paragraph } from 'components'
import { utilities } from 'styles'

const StyledSection = styled.section`
  padding: 8rem 10rem 0rem 10rem;
`

const StyledHeadingSecondary = styled(HeadingSecondary)`
  text-align: center;
  margin-bottom: ${utilities.marginSmall}
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: -4rem;
`

const StyledDivInfo = styled.div`
  max-width: 50rem;
  margin-top: ${utilities.marginLarge};
`

const StyledImageCoastline = styled(ImageCoastline)`
  margin-top: -10rem;
`

export default function SectionWork (props) {
  return (
    <StyledSection>
      <StyledHeadingSecondary text='Coastline Market' />
      <StyledDiv>
        <StyledDivInfo>
          <Paragraph text='As CTO of Coastline Market, I led the development of an eCommerce and logistics platform for the seafood industry. The platform includes a mobile app for eCommerce, a web app for logistics and a backend API for logic and automation.' /><br />
          <Paragraph text='As a fast-paced startup in a challenging industry, I used JavaScript technologies like React, React-Native and Express to get to market efficiently. Other technologies include Jest, MongoDB, Firebase, Heroku, Stripe, SendGrid, Twilio and Routific.' /><br />
          <Paragraph text='I used market data and iterative development to ensure product-market fit and design accuracy. I used customer feedback to ensure that the user interface was easy to understand and use.' /><br />
        </StyledDivInfo>
        <StyledImageCoastline />
      </StyledDiv>
    </StyledSection>
  )
}
