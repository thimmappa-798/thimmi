import React, { useReducer } from 'react'

function Reducer() {
    const thimmi=((currentState,action)=>{
        switch(action){
            case 'INCREMENT':
                console.log(currentState)
                break;
                case 'DECREMENT':
                    return {count:currentState.count-1}
                    break;
                    default:
                        return state
        }

    })

    
    const [state,dispatch]=useReducer(thimmi,{count:0});
  return (
    <>
    <p>count:{count}</p>
    <button onClick={()=>{dispatch('INCREMENT')}}>INCREMENT</button>
    <button onClick={()=>{dispatch('DECREMENT')}}>DECREMENT</button>
    </>
    
  )
}

export default Reducer