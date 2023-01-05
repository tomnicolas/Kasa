import star_grey from './../Assets/Star_grey.svg'
import star_red from './../Assets/Star_red.svg'
import styled from 'styled-components'

const StyledRatings = styled.div`
    display: flex;
    gap: 10px;
`

export default function Rating(props) {  
    return (
        <div>{
            {
            '1':(<StyledRatings>
                    <img src={star_red} alt="étoile grise" />
                    <img src={star_grey} alt="étoile grise" />
                    <img src={star_grey} alt="étoile grise" />
                    <img src={star_grey} alt="étoile grise" />
                    <img src={star_grey} alt="étoile grise" />
                </StyledRatings>
                ),
            '2':(<StyledRatings>
                    <img src={star_red} alt="étoile grise" />
                    <img src={star_red} alt="étoile grise" />
                    <img src={star_grey} alt="étoile grise" />
                    <img src={star_grey} alt="étoile grise" />
                    <img src={star_grey} alt="étoile grise" />
                </StyledRatings>
                ),
            '3':(<StyledRatings>
                    <img src={star_red} alt="étoile grise" />
                    <img src={star_red} alt="étoile grise" />
                    <img src={star_red} alt="étoile grise" />
                    <img src={star_grey} alt="étoile grise" />
                    <img src={star_grey} alt="étoile grise" />
                </StyledRatings>
                ),
            '4':(<StyledRatings>
                    <img src={star_red} alt="étoile grise" />
                    <img src={star_red} alt="étoile grise" />
                    <img src={star_red} alt="étoile grise" />
                    <img src={star_red} alt="étoile grise" />
                    <img src={star_grey} alt="étoile grise" />
                </StyledRatings>
                ),
            '5':(<StyledRatings>
                    <img src={star_red} alt="étoile grise" />
                    <img src={star_red} alt="étoile grise" />
                    <img src={star_red} alt="étoile grise" />
                    <img src={star_red} alt="étoile grise" />
                    <img src={star_red} alt="étoile grise" />
                </StyledRatings>
                ),
            }[props.rating] || 
            (<StyledRatings>
                <img src={star_grey} alt="étoile grise" />
                <img src={star_grey} alt="étoile grise" />
                <img src={star_grey} alt="étoile grise" />
                <img src={star_grey} alt="étoile grise" />
                <img src={star_grey} alt="étoile grise" />
            </StyledRatings>)
            }
        </div>
        )
}