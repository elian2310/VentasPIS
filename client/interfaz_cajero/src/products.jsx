import Product from "./product"
import styled from "styled-components"
import { products } from "./data"

const Container = styled.div`
    padding: 20px;
    display:flex;
    
`

const Prods = styled.div`
    display:flex;
    padding: 20px;
    flex:3;
    flex-wrap:wrap;
    justify-content: space-between;
`

const Details = styled.div`
    padding: 20px;
    display:flex;
    right: 0px;
    flex: 1;
    
`

const Products = () => {
    return (
            //<Title>Interfaz Cajero</Title>
        <Container>
            
            <Prods>
            {products.map(item=>(
                <Product item={item} key = {item.id}/>
            ))}
            </Prods>
            <Details>
                
                Shopping Details:

            </Details>
        </Container>
    )
}

export default Products