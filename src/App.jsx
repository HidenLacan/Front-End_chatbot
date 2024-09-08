import { useState } from 'react'
import Chatbot from './Chatbot'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1>Chatbot</h1>
       <Chatbot/>
    </>
  )
}

export default App
