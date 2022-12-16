import styled from "styled-components";

const Lunchs = styled.div`
    text-align: center;
    
`;

const Lunch = styled.div`
    h3 {
       margin-bottom: 0;
    }

    p {
        margin: 0;
    }
`;

function MenuLunchs() {
    const menuLunch = [
        {
            title: 'X-BURGER...........................$5,99',
            desc: 'Bread, hamburger, cheese, tomato.',
        },
        {
            title: 'X-EGG..............................$6,99',
            desc: 'Bread, hamburger, cheese, egg, tomato.',
        },
        {
            title: 'X-BACON............................$8,99',
            desc: 'Bread, hamburger, cheese, bacon, tomato.',
        },
        {
            title: 'X-CHICKEN............................$6,99',
            desc: 'Bread, shredded chicken, cheese, tomato.',
        },
        {
            title: 'X-SALAD............................$5,99',
            desc: 'Bread, hamburger, cheese, tomato, lettuce.',
        },
        {
            title: 'X-BACON-EGG............................$9,99',
            desc: 'Bread, hamburger, cheese, bacon, egg, tomato.',
        },
    ]

    return(
        <Lunchs>
            {menuLunch.map(menu =>(
                <Lunch key={menu.title} title={menu.title} desc={menu.desc}>
                    <h3>{menu.title}</h3>
                    <p>{menu.desc}</p>
                </Lunch>
            ))}
        </Lunchs>
    )
}

export default MenuLunchs;