// Import packages and components 
import React from "react"
import styled from 'styled-components'
import { Link } from "react-router-dom"
import colors from '../Utils/variables'

// Stylize the elements of the page
const StyledContainer = styled.div`
    min-height: calc(100vh - 189px);
    padding: 0 20px;
    @media (max-width: 768px) {
		min-height: calc(100vh - 389px);
	}
`
const StyledTitle = styled.h1`
    color: ${colors.primary};
    font-family: 'Montserrat', sans-serif;
	font-weight: 700;
	font-size: 288px;
    margin: 0;
    padding: 0;
    margin-top: 60px;
    @media (max-width: 768px) {
		font-size: 96px;
        margin-top: 180px;
	}
`
const StyledDescription = styled.p`
    color: ${colors.primary};
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 36px;
    margin-top: 40px;
    margin-bottom: 180px;
    @media (max-width: 768px) {
		font-size: 18px;
        margin-top: 10px;
        margin-right: 50px;
        margin-left: 50px;
	}
`
const StyledLink = styled(Link)`
    color: ${colors.primary};
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 18px;
    @media (max-width: 768px) {
		font-size: 14px;
	}
`

// Export the main function of the page
export default function Error() {
    return (
        <StyledContainer>
            <StyledTitle>404</StyledTitle>
            <StyledDescription>Oups! La page que vous avez demandez n'existe pas.</StyledDescription>
            <StyledLink to="/">Retourner sur la page d'accueil</StyledLink>
        </StyledContainer>
    )
}

