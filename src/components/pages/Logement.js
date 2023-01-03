import {useParams} from "react-router-dom";
import datas from './../../datas/datas.json'
import styled from "styled-components"
import Slider from "../slider";

const StyledContainer = styled.div`
    min-height: calc(100vh - 398px);
    padding: 0 20px;
`


export default function Logement() {
    const params = useParams()    
    return (
        <StyledContainer>
            {datas.filter(logement=> logement.id === params.id).map((logement) => (
                <div key={logement.id}>
                    <Slider pictures={logement.pictures}/>
                    <h1>{logement.title}</h1>
                </div>
            ))}
        </StyledContainer>
    )
}

