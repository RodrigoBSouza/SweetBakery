import styled from "styled-components";

const Juices = styled.div`
    text-align: center;
    
`;

const Juice = styled.div`
    h3 {
       margin-bottom: 0;
    }

    p {
        margin: 0;
    }
`;

function MenuJuices() {
    const menuJuices = [
        {
            title: 'ORANGE.........................$4,99',
            desc: 'Morbi id nunc varius, molestie neque.',
        },
        {
            title: 'STRAWBERRY......................6,99',
            desc: 'Morbi id nunc varius, molestie neque.',
        },
        {
            title: 'WATERMELON.....................$8,99',
            desc: 'Morbi id nunc varius, molestie neque.',
        },
        {
            title: 'PINEAPPLE......................$6,99',
            desc: 'Morbi id nunc varius, molestie neque.',
        },
        {
            title: 'PEACH..........................$5,99',
            desc: 'Morbi id nunc varius, molestie neque.',
        },
        {
            title: 'LEMON..........................$9,99',
            desc: 'Morbi id nunc varius, molestie neque.',
        },
    ]

    return(
        <Juices>
            {menuJuices.map(menu =>(
                <Juice key={menu.title} title={menu.title} desc={menu.desc}>
                    <h3>{menu.title}</h3>
                    <p>{menu.desc}</p>
                </Juice>
            ))}
        </Juices>
    )
}

export default MenuJuices;