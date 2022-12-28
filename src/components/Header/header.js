import React from "react"
import styled from 'styled-components'
import { Link } from "react-router-dom"
import image from "./../../Assets/LOGO.svg"
import colors from '../../Utils/variables'

const StyledHeader = styled.header`
	display: flex;
	max-width: 1240px;
	margin: auto;
	padding: 3%;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`

const StyledImg = styled.img`
	height: 68px;
`

const StyledLink = styled(Link)`
	display: inline-block;
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	font-size: 24px;
	padding-left: 50px;
	text-decoration: none;
	color: ${colors.primary};
	text-decoration: underline;

`

export default function Header() {

    return (
        <StyledHeader>
            <StyledImg src={image} alt="logo kasa" />
            <nav className='nav'>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/about">A Propos</StyledLink>
            </nav>
        </StyledHeader>
    )
}
