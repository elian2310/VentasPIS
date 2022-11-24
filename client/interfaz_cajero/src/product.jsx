import styled from "styled-components"

const Info = styled.h3`
font-weight: 300;
color: black;
text-align: left;
font-size: 20px;
position: absolute;
justify-content: left;
left: 5px;
bottom: 5px;
`


const Container = styled.div`
margin: 5px;
min-width: 300px;
height:350px;
align-items: center;
justify-content: center;
background-color: grey;
position: relative;

    /*&:hover $(Info){
        
    }*/
`

const AddBtn = styled.button`
position: absolute;
right: 8px;
bottom: 5px;
height: 25px;
width: 50px;
cursor: pointer;
`


const Product = ({item}) => {
    return (
        <Container>
            <Info>Item Name: {item.name}</Info>  
            <AddBtn>Add</AddBtn>       
        </Container>
    )
}

export default Product
