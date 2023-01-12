// Import packages and components 
import React from "react"
import Banner from '../banner'
import styled from 'styled-components'
import Dropdown from "../dropdown"
import about from '../../datas/about.json'

// Stylize the elements of the page
const StyledContainer = styled.div`
    min-height: calc(100vh - 398px);
    padding: 0 20px;
    @media (max-width: 768px) {
        min-height: calc(100vh - 338px);
    }
`
const StyledSection = styled.section`
    margin: 30px 0 200px 0;
`

// Export the main function of the page
export default function About() {
    return (
    <StyledContainer>
        <Banner origin="About"/>
        <StyledSection >
            {about.map((about, index) => (
                <Dropdown title={about.title} description={about.description} key={`${about}-${index}`}/>
            ))}
        </StyledSection>
    </StyledContainer>
    )
}
