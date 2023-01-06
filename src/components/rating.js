import star_grey from './../Assets/Star_grey.svg'
import star_red from './../Assets/Star_red.svg'
import styled from 'styled-components'

const StyledRatings = styled.div`
    display: flex;
    gap: 10px;
    @media (max-width: 768px) {
        gap: 5px;
    }
`

const StyledStars = styled.img`
@media (max-width: 768px) {
    height: 15px;
}
`

export default function Rating(props) {  
    return (
        <div>{
            {
            '1':(<StyledRatings>
                    <StyledStars src={star_red} alt="étoile grise" />
                    <StyledStars src={star_grey} alt="étoile grise" />
                    <StyledStars src={star_grey} alt="étoile grise" />
                    <StyledStars src={star_grey} alt="étoile grise" />
                    <StyledStars src={star_grey} alt="étoile grise" />
                </StyledRatings>
                ),
            '2':(<StyledRatings>
                    <StyledStars src={star_red} alt="étoile grise" />
                    <StyledStars src={star_red} alt="étoile grise" />
                    <StyledStars src={star_grey} alt="étoile grise" />
                    <StyledStars src={star_grey} alt="étoile grise" />
                    <StyledStars src={star_grey} alt="étoile grise" />
                </StyledRatings>
                ),
            '3':(<StyledRatings>
                    <StyledStars src={star_red} alt="étoile grise" />
                    <StyledStars src={star_red} alt="étoile grise" />
                    <StyledStars src={star_red} alt="étoile grise" />
                    <StyledStars src={star_grey} alt="étoile grise" />
                    <StyledStars src={star_grey} alt="étoile grise" />
                </StyledRatings>
                ),
            '4':(<StyledRatings>
                    <StyledStars src={star_red} alt="étoile grise" />
                    <StyledStars src={star_red} alt="étoile grise" />
                    <StyledStars src={star_red} alt="étoile grise" />
                    <StyledStars src={star_red} alt="étoile grise" />
                    <StyledStars src={star_grey} alt="étoile grise" />
                </StyledRatings>
                ),
            '5':(<StyledRatings>
                    <StyledStars src={star_red} alt="étoile grise" />
                    <StyledStars src={star_red} alt="étoile grise" />
                    <StyledStars src={star_red} alt="étoile grise" />
                    <StyledStars src={star_red} alt="étoile grise" />
                    <StyledStars src={star_red} alt="étoile grise" />
                </StyledRatings>
                ),
            }[props.rating] || 
            (<StyledRatings>
                <StyledStars src={star_grey} alt="étoile grise" />
                <StyledStars src={star_grey} alt="étoile grise" />
                <StyledStars src={star_grey} alt="étoile grise" />
                <StyledStars src={star_grey} alt="étoile grise" />
                <StyledStars src={star_grey} alt="étoile grise" />
            </StyledRatings>)
            }
        </div>
        )
}