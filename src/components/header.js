// Import packages and components 
import React from "react"
import styled from 'styled-components'
import { Link, useLocation } from "react-router-dom"
import image from "./../Assets/LOGO.svg"
import colors from '../Utils/variables'

// Stylize the elements of the page
const StyledHeader = styled.header`
	display: flex;
	max-width: 1240px;
	margin: auto;
	padding: 40px 20px 40px 20px;
	flex-direction: row;
	align-items: center;
	height: 68px;
	justify-content: space-between;
	@media (max-width: 768px) {
		padding: 10px 20px 0 20px;
	}
`
const StyledLink = styled(Link)`
	display: inline-block;
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	font-size: 24px;
	margin-left: 50px;
	text-decoration: none;
	color: ${colors.primary};	
	@media (max-width: 768px) {
		font-size: 12px;
		margin-left: 20px;
	}
`
const StyledImg = styled.img`
	@media (max-width: 768px) {
		width: 145px;
	}
`

// Export the main function of the component
export default function Header() {
	const location = useLocation()
    return (
        <StyledHeader>
            <StyledImg src={image} alt="logo kasa" />
            <nav>
                <StyledLink style={ location.pathname === '/' ? {textDecoration: 'underline'}: {textDecoration: 'none'}} to="/">Accueil</StyledLink>
                <StyledLink style={ location.pathname === '/about' ? {textDecoration: 'underline'}: {textDecoration: 'none'}} to="/about">A Propos</StyledLink>
            </nav>
        </StyledHeader>
    )
}
