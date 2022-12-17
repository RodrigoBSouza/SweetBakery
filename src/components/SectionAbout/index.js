import styled from "styled-components";
import about from "../../img/about.png";
import Button from "../Button";

const About = styled.section`
    display: flex;
    gap: 40px;
    padding: 50px 60px;
    background-color: #f1f1f1;

    h2 {
        margin: 0;
        margin-bottom: 20px;
        font-size: 3rem;
    }

    img {
        width: 50%;
    }

    @media screen and (max-width: 420px) {
        display: block;
        padding: 20px 20px;

        h2 {
            text-align: center;
        }
        
        img {
            width: 100%;
        }
    }
`;

const Aside = styled.aside`
    p {
        font-size: 18px;
    }
`;

function SectionAbout() {
    return(
        <About>
            <img src={about} alt="The bakery about"/>
            <Aside>
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non finibus ligula, 
                    id viverra enim. Cras lacinia neque nulla, ac egestas tellus lacinia dignissim. 
                    Maecenas feugiat aliquet pulvinar. Cras lacinia neque nulla, ac egestas tellus lacinia 
                    dignissim. Maecenas feugiat aliquet pulvinar. Donec imperdiet ligula justo. Aenean 
                    accumsan scelerisque arcu sed malesuada. Curabitur arcu neque, fringilla vitae efficitur 
                    ac, egestas et nulla. Morbi id nunc varius, molestie neque eget, pretium risus. 
                    Fusce laoreet, lectus id posuere cursus, leo lacus aliquet mauris, in tristique lorem.
                </p>
                <Button/>
            </Aside>

        </About>
    )
}

export default SectionAbout;