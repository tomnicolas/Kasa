import styled from "styled-components";
import { useState } from "react";
import vector from './../Assets/Vector.svg'

const StyledSlider = styled.div`
    position: relative;
    height: 400px;
    width:100%;
    max-width: 1240px;
    margin: auto;
    :after{
        position: absolute;
        content:"";
        height:100%;
        width:100%;
        top:0;
        left:0;
        border-radius: 25px;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
    }
`

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    border-radius: 25px;
`

const StyledLeftArrow = styled.img`
    position: absolute;
    align-items: center;
    transform: rotate(90deg);
    z-index: 1;
    top: 47%;
    left: 30px;
    scale: 3;
    cursor: pointer;
`

const StyledRightArrow = styled.img`
    position: absolute;
    transform: rotate(-90deg);
    z-index: 1;
    top: 47%;
    right: 30px;
    scale: 3;
    cursor: pointer;
`

const StyledIndex = styled.div`
    position: absolute;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 18px;
    z-index: 1;
    color: white;
    bottom: 25px;
    left: 49%;
`

export default function Slider(props) {

    const [currentIndex, setCurrentIndex] = useState(0)
    
    const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? props.pictures.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    }

    const goToNext = () => {
    const isLastSlide = currentIndex === props.pictures.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    }

    return (
        <StyledSlider>
            <StyledImg src={props.pictures[currentIndex]} alt="logement" />
            <StyledLeftArrow src={vector} onClick={goToPrevious} alt="précédent" />
            <StyledRightArrow src={vector} onClick={goToNext} alt="suivant" />
            <StyledIndex>{currentIndex + 1}/{props.pictures.length}</StyledIndex>
        </StyledSlider>

    )
}