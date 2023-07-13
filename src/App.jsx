import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import Pokedex from './components/Pokedex'

function App() {
  
  const [ name, setName ]=useState("")

  return (
    <>
      <Input setName={setName}/>
      <Pokedex name={name} />
    </>
  )
}

export default App
