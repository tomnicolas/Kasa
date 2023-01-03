import React, {useState} from "react"
import styled, { keyframes} from 'styled-components'
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
    font-size: 24px;
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

const StyledDescription = styled.p`
    font-family: 'Montserrat', sans-serif;
    background-color: ${colors.tertiary};
    font-weight: 400;
    margin: 0;
    text-align: start;
    padding: 30px 20px;
    border-radius: 0 0 5px 5px;
    font-size: 24px;
    z-index: 0;
    color: ${colors.primary};
    animation: ${translateY} 0.5s ease-out alternate;
`

export default function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(true)

    return isOpen ?(
        <StyledDropdown>
            <StyledDropHeader onClick={() => setIsOpen(false)}>
                <StyledTitle>{props.title}</StyledTitle>
                <img src={vector} alt="collapse" />
            </StyledDropHeader>
        </StyledDropdown>
    ) : (
        <StyledDropdown>
            <StyledDropHeader onClick={() => setIsOpen(true)}>
                <StyledTitle>{props.title}</StyledTitle>
                <img src={vector} style={{transform: "rotate(180deg)"}} alt="collapse" />
            </StyledDropHeader>
            <StyledDescription>{props.description}</StyledDescription>
        </StyledDropdown>

    )

}