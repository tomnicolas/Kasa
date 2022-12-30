import React from "react"
import image from "./../../Assets/IMG.svg"
import styled from 'styled-components'

const StyledBanner = styled.div`
    position: relative;
    align-items: center;
    height: 223px;
    margin: auto;
	padding: 40px 20px 40px 20px;
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

export default function Banner() {
    return (
        <StyledBanner>
            <div>
            <StyledImg src={image} alt="bord de mer"/>
            <StyledTitle>Chez vous, partout et ailleurs</StyledTitle>
            </div>
        </StyledBanner>
    )
}