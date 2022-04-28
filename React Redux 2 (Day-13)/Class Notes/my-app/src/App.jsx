import React from 'react'
import './App.css'
import { addCount } from './Redux/action'
import { store } from './Redux/store'
// import { useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const counter = useSelector((store) => store.counter) // expect to have a callback function

  return (
    <div className="App">
      <h3> Counter: {counter} </h3>
      <button
        onClick={() => {
          dispatch(addCount(1))
        }}
      >
        Add 1
      </button>
    </div>
  )
}

export default App
