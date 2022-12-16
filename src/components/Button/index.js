import styled from "styled-components";

const Btn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 40px;
    padding: 20px;
    margin-top: 10px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    color: #f1f1f1;
    background-color: #201c19;
    cursor: pointer;

    &:hover {
        color: #ff0055;
    }
`;

export const FormButton = styled(Btn)`

`;

function Button() {
    return(
        <Btn>Learn More</Btn>
    )   
}

export default Button;