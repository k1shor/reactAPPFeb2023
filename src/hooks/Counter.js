import React, { useEffect, useState } from 'react'

const Counter = () => {
    let [count, setCount] = useState(0)
    let [data, setData] = useState(100)

    /*
    useState - hook to manage state
                re renders the page when the value changes
                syntax: 
                let/const [name, function] = useState(initial value)
                    name - variable name
                    function - function to update variable, eg: setName 
                    initial value - starting value
                        0-9 : number
                        " " : string
                        [ ] : array
                        { } : objects

    useEffect - shows side effect when state variable changes state
                syntax: 
                useEffect(function, [state_variables])
                    function -> effect to be seen
                    state_variables -> list of state variables that trigger the function
                        [] -> renders only on page load
                        [var1, var2] -> renders on page load and when var1 or var2 changes
                        null -> no array -> renders on load, and when any state variable changes
    */
   useEffect(()=>{
    window.alert("value updated")
   }, [])

    const increase_count = () => {
        setCount(++count)
    }
    const decrease_count = () => {
        setCount(--count)
    }
    const reset_count = () => {
        setCount(0)
    }

    return (
        <>
            <h1 className='text-center display-1'>
                Count: {count}
            </h1>
            <center>
                {
                    count<10 && 
                    <button className='btn btn-success btn-lg' onClick={increase_count}>Increase Count</button>
                }
                <button className='btn btn-danger btn-lg' onClick={decrease_count}>Decrease Count</button>
                <button className='btn btn-info btn-lg' onClick={reset_count}>Reset Count</button>
            </center>

            <br/>
            <h1>Data: {data}</h1>
            <button className='btn btn-success' onClick={()=>setData(data+10)}>Increase Data</button>
            <button className='btn btn-secondary' onClick={()=>setData(data-10)}>Decrease Data</button>
            <button className='btn btn-warning' onClick={()=>setData(1000)}>Reset Data</button>
        </>
    )
}

export default Counter