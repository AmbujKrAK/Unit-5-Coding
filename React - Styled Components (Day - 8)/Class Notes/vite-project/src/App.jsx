import { useState } from 'react'
import { Button } from './components/button'
function App() {
  return (
    <div className="App">
      <div>Hello World!</div>

      <Button
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
      </Button>
    </div>
  )
}

export default App
