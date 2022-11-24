import React from 'react'
import ReactDOM from 'react-dom/client'
import Products from './products'
import styled from "styled-components"
import CashierPage from './cashierPage'

const Container = styled.div`
height:60px;
background-color: black;`

const root = ReactDOM.createRoot(document.getElementById('root'))
//root.render(<Products/>)
root.render(<CashierPage/>)


//root.render(<p>Hola</p>)
/*function Items(){
    return <h1>Items</h1>
}*/
