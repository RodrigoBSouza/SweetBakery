import {FaInstagram, FaFacebook, FaTiktok, FaTwitter} from "react-icons/fa"
import styled from "styled-components";

const ContainerFooter = styled.footer`
    background-color: #201c19;
    color: #f1f1f1;
    padding-bottom: 30px;

    h2 {
        text-align: center;
        margin: 0;
        margin-bottom: 20px;
        padding-top: 30px;
        font-size: 2rem;
    }

    p {
        width: 50%;
        text-align: center;
        margin: auto;
        margin-bottom: 30px;
        font-size: 18px;
    }

    @media screen and (max-width: 420px) {
        p {
            width: 80%;
        }
    }
`;

const FooterIcons = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;

    .icons:hover {
        cursor: pointer;
        color: #ff0055;
        transform: scale(1.1);
    }
`;

function Footer() {
    return(
        <ContainerFooter>
            <h2>Sweet Bakery</h2>
            <p>
            Integer id purus tempor, scelerisque enim et, viverra dui. 
            Vestibulum ullamcorper enim lacus, eget placerat nisi tempor sed. 
            Vivamus consequat elit id lacinia iaculis. Fusce luctus aliquet 
            consectetur.
            </p>

            <FooterIcons>
                <FaInstagram className="icons" size={25}/>
                <FaFacebook className="icons" size={25}/>
                <FaTiktok className="icons" size={25}/>
                <FaTwitter className="icons" size={25}/>
            </FooterIcons>
        </ContainerFooter>
    )
}

export default Footer;