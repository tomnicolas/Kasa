// Import packages and components 
import {useState} from "react"
import styled, { keyframes} from 'styled-components'
import {  useLocation } from "react-router-dom"
import colors from './../Utils/variables'
import vector from './../Assets/Vector.svg'

// Stylize the elements of the page
const StyledDropdown = styled.div`
    width: 100%;
    max-width: 1023px;
    display: flex;
    flex-direction: column;
    margin: 30px auto 0 auto;
    @media (max-width: 768px) {
        margin: 20px auto 0 auto;
    }
`
const StyledDropHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 47px;
    z-index: 1;
    border-radius: 5px;
    background-color: ${colors.primary};
    padding: 0 2%;
    cursor: pointer;
    @media (max-width: 768px) {
        height: 30px;
    }
`
const StyledTitle = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    color: white;
    @media (max-width: 768px) {
        font-size: 13px !important;
    }
`
const StyledImg = styled.img`
    @media (max-width: 768px) {
        scale: 0.7;
    }
`
const translateY = keyframes`
    from {
        transform: translateY(-10px);
    } 
    to {
        transform: translateY(0px);
    }
`
const StyledDescriptionBox = styled.div`
    background-color: ${colors.tertiary};
    text-align: start;
    border-radius: 0 0 5px 5px;
    font-size: 24px;
    z-index: 0;
    color: ${colors.primary};
    animation: ${translateY} 0.5s ease-out alternate;
`
const StyledDescription = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    margin: 40px 15px;
    @media (max-width: 768px) {
        font-size: 12px !important;
        margin: 10px 15px;
    }
`

// Export the main function of the component
export default function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(true)
    const location = useLocation();

    return isOpen ?(
        <StyledDropdown>
            <StyledDropHeader onClick={() => setIsOpen(false)}>
                <StyledTitle style={location.pathname === '/about' ? {fontSize: '24px'}: {fontSize: '18px'}}>{props.title}</StyledTitle>
                <StyledImg src={vector} alt="collapse" />
            </StyledDropHeader>
        </StyledDropdown>
    ) : (
        <StyledDropdown>
            <StyledDropHeader onClick={() => setIsOpen(true)}>
                <StyledTitle style={location.pathname === '/about' ? {fontSize: '24px'}: {fontSize: '18px'}}>{props.title}</StyledTitle>
                <StyledImg src={vector} style={{transform: "rotate(180deg)"}} alt="collapse" />
            </StyledDropHeader>
            <StyledDescriptionBox>
                <StyledDescription style={location.pathname === '/about' ? {fontSize: '24px'}: {fontSize: '18px'}}>{props.description}</StyledDescription>
            </StyledDescriptionBox>
        </StyledDropdown>
    )
}