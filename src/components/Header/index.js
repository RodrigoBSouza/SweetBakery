import styled from "styled-components";
import { HiMenuAlt2 } from "react-icons/hi"
import { useState } from "react";

const Menu = styled.header`
    width: 100%;
    position: fixed;
    z-index: 2;
`;

const MenuHeader = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 60px;
    height: 50px;
    color: #f1f1f1;
    background-color: #201c19;
    transition: 0.5s;


    span {
        color: #ff0055;
    }

    a {
        color: #f1f1f1;
        font-size: 1.8rem;
        cursor: pointer;
        text-decoration: none;
    }

    ul {
        display: flex;
        gap: 45px;
        list-style: none;

    }

    li {
        font-size: 18px;
        cursor: pointer;

        &:hover {
            color: #ff0055;
            transform: scale(1.1);
        }
    }

    @media screen and (max-width: 420px) {
        padding: 15px;
        transition: 0.5s;

        ul {
            flex-direction: column;
            text-align: center;
            margin-top: 50px;
            gap: 60px;
            padding: 0;
        }

        li {
            font-size: 32px;
        }

        li:active {
            color: #ff0055;
        }

        li:hover {
            color: #ff0055;
            transform: scale(1.1);
        }
    }
`;

const Nav = styled.nav`

    @media screen and (max-width: 420px) {
        display: ${({open}) => open ? 'flex' : 'none'};
        justify-content: center;
        padding: 0;
        position: absolute;
        top: 0;
        margin-top: 80px;
        left: 0;
        width: 100%;
        height: 500px;
        background-color: #191814;
    }
`;

const Hamburguer = styled.i`
    display: none;
    transition: 0.1s;

    &:active {
        transform: scale(1.2);
    }

    @media screen and (max-width: 420px) {
        display: flex;
    }
`;

function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    let x = document.body.clientWidth;

    if(x < 421) {
        var scrollToAbout = () => {
            window.scrollTo(0, 200) 
            setOpenMenu(!openMenu)
        }; 
        var scrollToMenu = () => {
            window.scrollTo(0, 980)
            setOpenMenu(!openMenu)
        };
        var scrollToContacts = () => {
            window.scrollTo(0, 1550)
            setOpenMenu(!openMenu)
        };

    } else {
        scrollToAbout = () => window.scrollTo(0, 500);
        scrollToMenu = () => window.scrollTo(0, 1000);
        scrollToContacts = () => window.scrollTo(0, 1600);
    }

    return(
        <Menu>
            <MenuHeader>
                <a href={<Menu/>}>Sweet<span>Bakery</span></a>
            
                    <Nav open={openMenu}>
                        <ul>
                            <li onClick={scrollToAbout}>About Us</li>
                            <li onClick={scrollToMenu}>Our Menu</li>
                            <li onClick={scrollToContacts}>Contacts</li>
                        </ul>
                    </Nav>  

                <Hamburguer open={openMenu} onClick={() => setOpenMenu(!openMenu)}>
                    <HiMenuAlt2 size={35}/>
                </Hamburguer>
            </MenuHeader>
        </Menu>
    )   
}

export default Header;