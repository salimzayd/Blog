import React, { useReducer} from 'react'

const initialvalue = 0;
const reducer = (state,action) =>{
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return  initialvalue
        default  :
        return state         
    }
  }
const Usereducer = () => {

    const [count,dispatch] = useReducer(reducer,initialvalue)
    
  return (
    <div>

      <h1>counter</h1>
      <h2>count is : {count}</h2>
      <button onClick={() => dispatch('increment')}> + </button>
      <button onClick={() => dispatch('decrement')}> - </button>
      <button onClick={() => dispatch('reset')}> reset </button>
    </div>
  )
}

export default Usereducer;




// import React,{useState,useReducer} from 'react';
// const initialstate = 0;
// const reducer1= (state,action)=>{
//   switch(action){
//     case 'increment':
//       return val + 1
//     case 'decrement':
//       return val - 1
//     case 'reset':
//       return initialstate
//       default :
//       return state  
//   }

// }

// const reducerapp = () =>{
//   const [val,dispatch] = useReducer(reducer1,initialstate)
//   return(
//     <div>
//       <h1> counter</h1>
//       <h3>count : {count}</h3>
//       <button onClick={() => dispatch('increment')} > + </button>
//       <button onClick={() => dispatch('decrement')}> - </button>
//       <button onClick={() => dispatch('reset')}>reset</button>
//     </div>
//   )
// }

// export default reducerapp