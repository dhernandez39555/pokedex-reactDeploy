import React from 'react'

function Input({ setName }) {

    function handleClick(e){
        setName(e.target.previousSibling.value)
    }

  return (
    <div>
        <input type="text" placeholder="Enter Pokemon Name"/>
        <button onClick={handleClick}>Catch!</button>
    </div>
  )
}

export default Input