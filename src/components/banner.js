import React from "react"
import imageHome from "./../Assets/IMG.svg"
import imageAbout from './../Assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.svg'
import styled from 'styled-components'

const StyledBanner = styled.div`
    position: relative;
    align-items: center;
    height: 223px;
    margin: auto;
    margin-top: 10px;
    overflow: hidden;
    max-width: 1240px;
`

const StyledImg = styled.img`
    height: 223px;
    max-width: 100%;
    max-height: 100%;
    display: block;
    border-radius: 25px;
    filter: brightness(50%);
`

const StyledTitle = styled.h1`
    position: absolute;
    top: 50%;
    margin-top: -29px;
    left: 50%;
    margin-left: -352px;
    padding: 0;
    z-index: 10;
    color: white;
    font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	font-size: 48px;
`

export default function Banner(props) {
    if (props.origin === "Home") {
    return (
        <StyledBanner>
            <StyledImg src={imageHome} alt="Bord de mer"/>
            <StyledTitle>Chez vous, partout et ailleurs</StyledTitle>
        </StyledBanner>
        )
    } else if (props.origin === "About") {
        return (
            <StyledBanner>
            <StyledImg src={imageAbout} alt="Montagnes"/>
        </StyledBanner>
        )
    }

}