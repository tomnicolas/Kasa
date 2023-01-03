import React from "react"
import Banner from '../banner'
import styled from 'styled-components'
import Gallery from "../gallery"

const StyledContainer = styled.div`
    min-height: calc(100vh - 358px);
    padding: 0 20px;
`

export default function Home() {
    return (
    <StyledContainer>
        <Banner origin="Home"/>
        <Gallery/>
    </StyledContainer>
    )
}

