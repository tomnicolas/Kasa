import React from "react"
import Banner from '../banner'
import styled from 'styled-components'
import Dropdown from "../dropdown"
import about from '../../datas/about.json'

const StyledContainer = styled.div`
    min-height: calc(100vh - 398px);
    padding: 0 20px;
`

const StyledSection = styled.section`
    margin: 30px 0 200px 0;
`

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