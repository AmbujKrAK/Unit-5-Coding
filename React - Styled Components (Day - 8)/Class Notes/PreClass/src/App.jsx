import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'
import Navbar from './components/navbar'



const Wrapper = styled.div`
  padding: 2rem;
  border: 1px solid red;

h1{
  color: royalblue;
}

h2{
  color: crimson;

  @media all and (max-width: 620px){
    color : yellowgreen;
  }
}
`;

const A = styled.a`
text-decoration : none;
font-size: 24px;
color: ${props => (props.color == true ? "red":"crimson")} 

`

function App() {
  return (
    <div className="App">
      <Wrapper>
        <A href="https://www.google.com" target="_blank">Google</A>
        <h1>Hello World </h1>
        <h2>First Time Using Styled Components</h2>
      </Wrapper>
      <Navbar/>
    </div>
  )
}

export default App
