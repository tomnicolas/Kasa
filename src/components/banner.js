// Import packages and components 
import React from "react"
import imageHome from "./../Assets/IMG.svg"
import imageAbout from './../Assets/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg'
import styled from 'styled-components'

// Stylize the elements of the page
const StyledBanner = styled.div`
    position: relative;
    align-items: center;
    height: 223px;
    width: 100%;
    margin: auto;
    margin-top: 10px;
    border-radius: 25px;
    overflow: hidden;
    max-width: 1240px;
    @media (max-width: 768px) {
        ${(props) => props.$height && `height: 111px`};
        border-radius: 10px;
    }
`
const StyledImg = styled.img`
    height: 223px;
    max-width: 100%;
    width: 100%;
    display: block;
    border-radius: 25px;
    filter: brightness(50%);
    object-fit: cover;
    @media (max-width: 768px) {
        border-radius: 10px;
    }
`
const StyledTitle = styled.h1`
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    top: 50%;
    margin-top: -29px;
    left: 50%;
    margin-left: -352px;
    margin-right: 40px;
    padding: 0;
    z-index: 1;
    color: white;
    font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	font-size: 48px;
    @media (max-width: 814px) {
        margin-top: -63px;
    }
    @media (max-width: 768px) {
        font-size: 24px;
        left: 5%;
        margin-left: 0px;
        margin-top: -14px;
    }
    @media (max-width: 454px) {
        margin-top: -30px;
    }
`

// Export the main function of the component
export default function Banner(props) {
    if (props.origin === "Home") {
        return (
        <StyledBanner $height>
            <StyledImg src={imageHome} alt="Bord de mer"/>
            <StyledTitle><div style={{marginRight: '8px'}}>Chez vous,</div><div> partout et ailleurs</div></StyledTitle>
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