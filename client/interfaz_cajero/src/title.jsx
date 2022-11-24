import styled from "styled-components"

const Container = styled.div`
    //margin-top: 20px;
    background-color: black;
    position: relative;
    height: 50px;
`
const Title = styled.h1`
    color: white;
    font-size: 30px;
    //text-align: center;
    position: center;
`

const Header = () => {
    return (
        <Container>
            <Title>Interfaz Cajero</Title>
        </Container>
    )
}

export default Header