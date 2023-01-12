// Import packages and components 
import React from "react"
import Banner from "../components/banner"
import styled from 'styled-components'
import Gallery from "../components/gallery"

// Stylize the elements of the page
const StyledContainer = styled.div`
    min-height: calc(100vh - 358px);
    padding: 0 20px;
`

// Export the main function of the page
export default function Home() {
    return (
    <StyledContainer>
        <Banner origin="Home"/>
        <Gallery/>
    </StyledContainer>
    )
}

