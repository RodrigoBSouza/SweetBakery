import { useState } from "react";
import styled from "styled-components";
import MenuCandies from "../MenuCandies";
import MenuJuices from "../MenuJuices";
import MenuLunchs from "../MenuLunchs";

const ConatinerMenu = styled.section`
    padding: 30px 60px;
    color: #f1f1f1;
    background-color: #201c19;

    h2 {
        text-align: center;
        font-size: 3rem;
        margin: 0;
        margin-bottom: 50px;
    }

    @media screen and (max-width: 420px) {
        padding: 10px;
        padding-bottom: 30px;
    }
`;

const TitleMenu = styled.div`
    border-bottom: 2px solid #f1f1f1;

    ul {
        display: flex;
        justify-content: center;
        gap: 60px;
        padding: 0;
        list-style: none;
        font-size: 1.5rem;
        margin-bottom: 10px;
    }

    .snacks {
        color: #ff0055;
    }

    li:hover {
        cursor: pointer;
        color: #ff0055;
    }

    li:active {
        color: #ff0055;
    }

    @media screen and (max-width: 420px) {
        li {
            font-size: 18px;
        }
    }   
`;

function SectionMenu() {
    const menus = [
        <MenuLunchs/>,
        <MenuCandies/>,
        <MenuJuices/>
    ]

    const [menuActive, setMenuActive] = useState([0]);

    const snacks = document.querySelector('.snacks');
    const candies = document.querySelector('.candies');
    const juices = document.querySelector('.juices');

    if(menuActive === 0) {
        snacks.style.color = '#ff0055';
        candies.style.color = '#f1f1f1';
        juices.style.color = '#f1f1f1';
    } else if(menuActive === 1) {
        snacks.style.color = '#f1f1f1';
        candies.style.color = '#ff0055';
        juices.style.color = '#f1f1f1';
    } else if(menuActive === 2) {
        snacks.style.color = '#f1f1f1';
        candies.style.color = '#f1f1f1';
        juices.style.color = '#ff0055';
    }

    return(
        <ConatinerMenu>
            <h2>Our Menu</h2>

            <TitleMenu>
                <ul>
                    <li className="snacks" onClick={() => setMenuActive(0)}>SNACKS</li>
                    <li className="candies" onClick={() => setMenuActive(1)}>CANDIES</li>
                    <li className="juices" onClick={() => setMenuActive(2)}>JUICES</li>
                </ul>
            </TitleMenu>
            {menus[menuActive]}

        </ConatinerMenu>
    )
}

export default SectionMenu;