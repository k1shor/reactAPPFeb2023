import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Main = () => {
    const counterReducer = useSelector(store => store.counter)
    const count = counterReducer.count
    const data = counterReducer.data

    // const count = useSelector(store=>store.counter.count)

    const increase_count = () => {
        dispatch({type: "INCREASE_COUNT"})
    }
    const decrease_count = () => {
        dispatch({type: "DECREASE_COUNT"})
    }
    const reset_count = () => {
        dispatch({type: "RESET_COUNT"})
    }
    const gameStore = useSelector(store=>store.game)
    const game = gameStore.game
    const player = gameStore.player

    const [gamename,setGame] = useState('')
    const [playername, setPlayer] = useState('')

    const dispatch = useDispatch()

    const update_game = () => {
        dispatch({type: "UPDATE_GAME",payload: gamename})
    }

    const update_player = () => {
        dispatch({type: "UPDATE_PLAYER", payload: playername})
    }


    return (
        <>
            <h1 className='display-1 text-center'>count: {count}</h1>
            <button className='btn btn-warning' onClick={increase_count}>Update count</button>
            <button className='btn btn-warning' onClick={decrease_count}>Decrease count</button>
            <button className='btn btn-warning' onClick={reset_count}>Reset count</button>

            <h1 className='display-1 text-center'>data: {data}</h1>
            <button className='btn btn-warning' onClick={()=>dispatch({type: "INCREASE_DATA"})}>Update count</button>
            <button className='btn btn-warning' onClick={()=>dispatch({type: "DECREASE_DATA"})}>Decrease count</button>
            <button className='btn btn-warning' onClick={()=>dispatch({type: "RESET_DATA"})}>Reset count</button>

            <h1 className='display-1 text-center'>Game: {game}</h1>
            <h1 className='display-1 text-center'>Player: {player}</h1>
            
            <div className='d-flex my-2 w-50 m-auto'>
            <input className='form-control w-75' type={'text'} placeholder="enter game name here" 
            onChange={e=>setGame(e.target.value)}/>
            <button className='btn btn-warning w-25' onClick={update_game}>UPDATE GAME</button>
            </div>
            <div className='d-flex w-50 m-auto'>
            <input className='form-control w-75' type={'text'} placeholder="enter player name here" 
            onChange={e=>setPlayer(e.target.value)}/>
            <button className='btn btn-warning w-25' onClick={update_player}>UPDATE PLAYER</button>
            </div>
        </>
    )
}

export default Main