import banner from "../../img/banner.png"
import styled from "styled-components"

const ContainerBanner = styled.section`
    padding-top: 70px;
`;

const TheBanner = styled.section`
    display: flex;
    align-items: center;
    background-image: url(${banner});
    background-size: cover;
    
    @media screen and (max-width: 420px) {
        background-size: 100%;
        background-repeat: no-repeat;
    }
`;

const TextBanner = styled.div`
    max-width: 40%;
    padding: 10px 60px;

    p {
        margin: 0;
        background-color: #1f1f1f;
        padding: 20px;
        font-size: 1rem;
        color: #f1f1f1;
        opacity: .7;
    }

    @media screen and (max-width: 420px) {
        padding: 20px 40px;

        p {
            margin-top: 20px;
            padding: 10px;
            width: auto;
            font-size: .7rem;
            margin: 0;
        }
    }
`;

function Banner() {
    return(
        <ContainerBanner>
            <TheBanner>
                <TextBanner>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non finibus ligula, 
                        id viverra enim. Cras lacinia neque nulla, ac egestas tellus lacinia dignissim. 
                        Maecenas feugiat aliquet pulvinar.</p>
                </TextBanner>
            </TheBanner>
        </ContainerBanner>

    )
}

export default Banner;