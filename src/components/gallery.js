import React from "react"
import styled from 'styled-components'
import colors from './../Utils/variables'
import logement from './../datas/datas.json'
import { useNavigate } from "react-router-dom";

const logements = logement

const StyledGallery = styled.div`
    background-color: ${colors.tertiary}; 
    margin: auto;
    box-sizing: border-box;
    border-radius: 25px;
    padding: 4%;
    margin-top: 40px;
    max-width: 1240px;
`

const StyledList = styled.div `
    display: grid;
    height: auto;
    grid-template-columns: repeat(3, 31.13%) ;
    column-gap: 4%;
    row-gap: 40px; 
    grid-template-rows: auto;
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
    margin-right: 10px;
    color: white;
    text-align : start;
    left: 8%;
    bottom: -0px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 18px;

`

export default function Gallery() {   
    
    const navigate = useNavigate()
    
    return (
        <StyledGallery>
            <StyledList>
                {logements.map((logement, index) => (
                    <StyledCard key={`${logement}-${index}`} onClick={() => {
                        navigate(`/logement/${logement.id}`);
                        }}>
                        <StyledCover src= {logement.cover} alt="logement photo prncipale" />
                        <StyledTitre key={`${logement}-${index}`}>
                            {logement.title}
                        </StyledTitre>
                    </StyledCard>
                ))}
            </StyledList>
        </StyledGallery>
    )
}
