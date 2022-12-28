import React from "react"
import image from "./../../../Assets/IMG.svg"
import styled from 'styled-components'

const StyledImg = styled.img`
    max-width: 1240px;  
    margin: auto;
`

export default function Home() {
    return (
        <div>
            <img src={image} alt="bord de mer"/>
            <h1>Kasa</h1>
        </div>
    )
}

