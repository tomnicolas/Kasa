import React, {useState} from "react"
import styled, { keyframes} from 'styled-components'
import {  useLocation } from "react-router-dom"
import colors from './../Utils/variables'
import vector from './../Assets/Vector.svg'

const StyledDropdown = styled.div`
    max-width: 1023px;
    display: flex;
    flex-direction: column;
    margin: auto;
`

const StyledDropHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 47px;
    z-index: 1;
    border-radius: 5px;
    margin-top: 30px;
    background-color: ${colors.primary};
    padding: 0 20px;
    cursor: pointer;
`

const StyledTitle = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: ${props => (props.small ? '18px' : '24px')};
    color: white;
`

const translateY = keyframes`
    from {
        transform: translateY(-50px);
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
`

export default function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(true)
    const location = useLocation();

    return isOpen ?(
        <StyledDropdown>
            <StyledDropHeader onClick={() => setIsOpen(false)}>
                <StyledTitle style={ location.pathname === '/about' ? {fontSize: '24px'}: {fontSize: '18px'}}>{props.title}</StyledTitle>
                <img src={vector} alt="collapse" />
            </StyledDropHeader>
        </StyledDropdown>
    ) : (
        <StyledDropdown>
            <StyledDropHeader onClick={() => setIsOpen(true)}>
                <StyledTitle style={ location.pathname === '/about' ? {fontSize: '24px'}: {fontSize: '18px'}}>{props.title}</StyledTitle>
                <img src={vector} style={{transform: "rotate(180deg)"}} alt="collapse" />
            </StyledDropHeader>
            <StyledDescriptionBox>
                <StyledDescription style={ location.pathname === '/about' ? {fontSize: '24px'}: {fontSize: '18px'}}>{props.description}</StyledDescription>
            </StyledDescriptionBox>
        </StyledDropdown>

    )

}