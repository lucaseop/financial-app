import styled from "styled-components";


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
` 

const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 295px;
    gap: 20px;
`
const Title = styled.span`
font-family: Inter;
font-size: 28px;
line-height: 40px;
text-align: left;
letter-spacing: 0.2px;
`


export{Container, Form, Title}