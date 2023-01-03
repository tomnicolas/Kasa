import React from "react"
import Banner from '../banner'
import styled from 'styled-components'
import Dropdown from "../dropdown"
import about from '../../datas/about.json'

const StyledContainer = styled.div`
    min-height: calc(100vh - 398px);
    padding: 0 20px;
`

export default function About() {
    return (
    <StyledContainer>
        <Banner origin="About"/>
        <section style={{marginBottom: '200px'}}>
            {about.map((about, index) => (
                <Dropdown title={about.title} description={about.description} key={`${about}-${index}`}/>
            ))}
        </section>
    </StyledContainer>
    )
}
