import React, { useEffect, useState } from 'react'

function Pokedex({ name }) {

    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        if (name !== "") {
            setLoading(true)
            fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
                .then(res => res.json())
                .then(data => {
                    setData(data)
                    setLoading(false)
                    loading ? null : console.log(data)
                })
                .catch(err => console.log(err))
        }
    }, [name])

    return (
    <>{ data == ""
        ? (<><h1>Enter A Pokemon Name!</h1></>)
        : (<>
            <h1>Name: {data.name}</h1>
            <h2>Weight: {data.weight}</h2>
            {data.stats.map((i, index) => <p key={index}>{i.stat.name}: {i.base_stat}</p>)}
            <img src={data.sprites.front_default} alt="" />
        </>)
    }</>
  )
}

export default Pokedex