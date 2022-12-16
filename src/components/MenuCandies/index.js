import styled from "styled-components";

const Candies = styled.div`
    text-align: center;
    
`;

const Candy = styled.div`
    h3 {
       margin-bottom: 0;
    }

    p {
        margin: 0;
    }
`;

function MenuCandies() {
    const menuCandies = [
        {
            title: 'CHEESECAKE.........................$4,99',
            desc: 'Phasellus mattis, ante sit amet maximus.',
        },
        {
            title: 'CHOCOLATE CANDY....................$2,99',
            desc: 'Phasellus mattis, ante sit amet maximus.',
        },
        {
            title: 'APPLE PIE..........................$4,99',
            desc: 'Phasellus mattis, ante sit amet maximus.',
        },
        {
            title: 'PUDDING............................$6,99',
            desc: 'Phasellus mattis, ante sit amet maximus.',
        },
        {
            title: 'JELLY..............................$2,99',
            desc: 'Phasellus mattis, ante sit amet maximus.',
        },
        {
            title: 'ZEFIR............................$1,99',
            desc: 'Phasellus mattis, ante sit amet maximus.',
        },
    ]

    return(
        <Candies>
            {menuCandies.map(menu =>(
                <Candy key={menu.title} title={menu.title} desc={menu.desc}>
                    <h3>{menu.title}</h3>
                    <p>{menu.desc}</p>
                </Candy>
            ))}
        </Candies>
    )
}

export default MenuCandies;