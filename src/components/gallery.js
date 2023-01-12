// Import packages and components 
import React from "react"
import styled from 'styled-components'
import colors from './../Utils/variables'
import logement from './../datas/datas.json'
import { useNavigate } from "react-router-dom";

// Stylize the elements of the page
const StyledGallery = styled.div`
    background-color: ${colors.tertiary}; 
    margin: auto;
    box-sizing: border-box;
    border-radius: 25px;
    padding: 4%;
    margin-top: 40px;
    max-width: 1240px;
    @media (max-width: 768px) {
        padding: 0%;
        background-color: white;
        margin-top: 20px;
    }
`
const StyledList = styled.div `
    display: grid;
    height: auto;
    grid-template-columns: repeat(3, 30.8%) ;
    column-gap: 4%;
    row-gap: 40px; 
    grid-template-rows: auto;
    @media (max-width: 992px) {
        grid-template-columns: repeat(2, 48%) ;
      }
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 100%) ;
        column-gap: 0%; 
        row-gap: 20px;
    }
`
const StyledCard = styled.article`
    position: relative;
    overflow: hidden;
    width: auto;
    aspect-ratio: 1 / 1;
    border-radius: 10px;
    :after{
        position: absolute;
        content:"";
        height:100%;
        width:100%;
        top:0;
        left:0;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
    }
    :hover {
        cursor: pointer;
        box-shadow: 0px 0px 20px black;
    }
    @media (max-width: 768px) {
        aspect-ratio: 1.3 / 1;         
    }
`
const StyledCover = styled.img`
    object-fit: cover;
    max-width: 100%;
    height: 100%;
    display: block;
`
const StyledTitre = styled.h3`
    position: absolute;
    z-index: 1;
    max-width: 50%;
    margin-right: 10px;
    color: white;
    text-align : start;
    left: 5%;
    bottom: -0px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 18px;

`

// Export the main function of the component
export default function Gallery() {   
    const navigate = useNavigate()
    return (
        <StyledGallery>
            <StyledList>
                {logement.map((logement, index) => (
                    <StyledCard key={`${logement}-${index}`} onClick={() => {
                        navigate(`/logement/${logement.id}`);
                        }}>
                        <StyledCover src= {logement.cover} alt="logement photo principale" />
                        <StyledTitre key={`${logement}-${index}`}>
                            {logement.title}
                        </StyledTitre>
                    </StyledCard>
                ))}
            </StyledList>
        </StyledGallery>
    )
}
