import {useParams} from "react-router-dom";
import datas from './../../datas/datas.json'
import Slider from "../slider"
import styled from "styled-components"
import colors from './../../Utils/variables'
import Dropdown from './../dropdown'
import Rating from "../rating";

const StyledContainer = styled.div`
    min-height: calc(100vh - 398px);
    padding: 0 20px;
    @media (max-width: 768px) {
        min-height: calc(100vh - 328px);
    }
`

const StyledList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start; 
    margin: auto;
    padding: 0;
    width: 100%;
    max-width: 1240px;
`

const StyledLogementHeader = styled.div`
    display: flex;
    flex-direction; row;
    justify-content: space-between;
    align-items: center;
    text-align: start;
    margin-top: 30px;
    width: 100%;
    max-width: 100%;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
        margin-top: 10px;
    }
`

const StyledTitle = styled.h1`
    color: ${colors.primary};
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 36px;
    margin: 0;
    @media (max-width: 768px) {
        font-size: 18px;
    }
`

const StyledLocation = styled.p`
    color: ${colors.primary};
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 18px;
    margin: 5px 0 0 0;
    padding: 0;
    @media (max-width: 768px) {
        font-size: 14px;
    }
` 

const StyledTagsBar = styled.div`
    display: flex;
    max-width: 100%;
    flex-wrap: wrap;
    @media (max-width: 768px) {
    }

`

const StyledTags = styled.div`
    height: 25px;
    background-color: ${colors.primary};
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: white;
    border-radius: 10px;
    line-height: 25px;
    text-align: center;
    width: fit-content;
    padding: 0 25px;
    margin-top: 20px;
    margin-right: 10px;
    @media (max-width: 768px) {
        font-size: 10px;
        height: 18px;
        line-height: 18px;
        border-radius: 5px;
        margin-top: 10px;
    }
`

const StyledInfos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: row-reverse;
        align-items: center;
        padding: 0;
        margin-top: 15px;
        width: 100%;
    }
    

`

const StyledHostInfos = styled.div`
    display: flex;
    align-items: center;
    height: 64px;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        height: 32px;
        margin-bottom: 0px;
    }
`

const StyledHostName = styled.p`
    color: ${colors.primary};
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 18px;
    text-align: right;
    width : min-content;
    margin: 0;
    margin-right: 10px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const StyledHostPicture = styled.img`
    height: 64px;
    width: 64px;
    border-radius: 32px;
    @media (max-width: 768px) {
        height: 32px;
        width: 32px;
        border-radius: 16px;
    }
`

const StyledLogementDesc = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 5%;
    align-items: start;
    justify-content: space-between;
    margin: 0;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`


export default function Logement() {
    const params = useParams()    
    
    return (
        <StyledContainer>
            {datas.filter(logement=> logement.id === params.id).map((logement) => (
                <StyledList key={logement.id}>
                    <Slider pictures={logement.pictures}/>
                    <StyledLogementHeader>
                        <div>
                            <StyledTitle>{logement.title}</StyledTitle>
                            <StyledLocation>{logement.location}</StyledLocation>
                            <StyledTagsBar>
                                {logement.tags.map((tags) => (
                                    <StyledTags key={tags}>{tags}</StyledTags>
                                ))}
                            </StyledTagsBar>
                        </div>
                        <StyledInfos>
                            <StyledHostInfos>
                                <StyledHostName>{logement.host.name}</StyledHostName>
                                <StyledHostPicture src={logement.host.picture} alt="hôte" />
                            </StyledHostInfos>
                            <Rating rating={logement.rating}/>
                        </StyledInfos>
                    </StyledLogementHeader>
                    <StyledLogementDesc>
                        <Dropdown title={'Description'} description={logement.description} key={`${logement.id}-${logement.description}`}/>
                        <Dropdown title={'Équipements'} description={logement.equipments.slice().map(e=><>{e}<br/></>)}/>
                    </StyledLogementDesc>
                </StyledList>
            ))}
        </StyledContainer>
    )
}

