import styled from "styled-components";
import contact from "../../img/contact.png"

const ContainetContacts = styled.section`
    background-color: #191814;
    color: #f1f1f1;
    padding: 40px 60px;

    h2 {
        margin: 0;
        margin-bottom: 50px;
        text-align: center;
        font-size: 3rem;
    }

    @media screen and (max-width: 420px) {
        padding: 20px;

        h2 {
            margin-bottom: 30px;
        }
    }
`;

const Contact = styled.div`
    display: flex;

    img {
        width: 600px;
    }

    @media screen and (max-width: 420px) {
        display: flex;
        flex-direction: column;

        img {
            margin: auto;
            width: 300px;
        }
    }
`;

const ContactForm = styled.form`
    margin-left: 60px;
    margin-top: 30px;
    width: 30%;

    input {
        display: flex;
        margin-bottom: 10px;
        flex-direction: column;
        width: 90%;
        height: 20px;
        border: none;
        border-bottom: 1px solid #f1f1f1;
        padding: 10px;
        font-size: 16px;
        outline: none;
        background-color: transparent;
        color: #f1f1f1;
    }

    input::placeholder, textarea::placeholder {
        color: #f1f1f1;
    }

    textarea {
        width: 90%;
        border: none;
        border: none;
        border-bottom: 1px solid #f1f1f1;
        padding: 10px;
        outline: none;
        font-size: 16px;
        background-color: transparent;
        color: #f1f1f1;
        resize: none;
    }

    button {
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

        @media screen and (max-width: 420px) {
            margin: auto;
            margin-top: 20px;
        }
    }

    @media screen and (max-width: 420px) {
        width: 100%;
        margin: 0;
        margin-top: 30px;
    }
`;

function Contatcs() {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return(
        <ContainetContacts>
            <h2>Contacts</h2>
            <Contact>
                <img src={contact}/>

                <ContactForm onSubmit={handleSubmit}>
                    <input type="text" placeholder="Your name..."/>
                    <input type="email" placeholder="Your e-mail..."/>
                    <textarea rows="6"  placeholder="Your mensage..."/>
                    <button>Send</button>
                </ContactForm>
            </Contact>
        </ContainetContacts>
    )
}

export default Contatcs;