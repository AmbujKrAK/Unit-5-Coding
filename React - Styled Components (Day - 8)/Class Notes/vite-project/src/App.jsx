import { useState } from 'react'
// import Button from './components/button'
import './App.css'
// import Flex from "./components/Flex";


function App() {
  const [theme, setTheme] = useState('dark')
  return (
    <div className="App">
      <h1>Hello World!</h1>

      {/* <Button
        onClick={() => {
          alert('Clicked')
        }}
      >
        Click Me
      </Button>

      <Button
        onClick={() => {
          alert('Trying To Sign In')
        }}
      >
        Sign In
      </Button>

      <Button
        onClick={() => {
          alert('Add Kya Karna Hai Bhai!')
        }}
      >
        Add One
      </Button> */}

      {/* <h3>Theme is {theme}</h3>

      {/* <Flex>
        <div>one</div>
        <div>two</div>
        <div>three</div>
      </Flex> */}

      {/* <Button */}
      {/* //   onClick={(theme) => { */}
      {/* //     setTheme(theme === 'light' ? 'dark' : 'light') */}
      {/* //   }} */}
      {/* // > */}
      {/* //   Change Theme */}
      {/* // </Button> */} 
      <button> Ant Component</button>

    </div>
  )
}

export default App
