import React, { useState } from 'react';

const Typevalue = () => {
  const [type, settype] = useState("");

  const typechange = (e) => {
    const newtype = e.target.value;
    settype(newtype);
    console.log(newtype);
  };

  return (
    <div>
        <h1>input field</h1>
      <input type="text" onChange={typechange} placeholder='type' />


    </div>
  );
};

export default Typevalue;



// import React,{useState} from 'react';

// const inputvalue = () =>{
//     const [value,setvalue] = useState("")

//     const hndlechange = (e) =>{
//         const newtype = e.target.value;
//         setvalue(newtype)
//         console.log(newtype) 

//     }


//     return(
//         <div>
//             <h1>input</h1>
//             <input type='text' placeholder='heloo' onChange={hndlechange}></input>
//         </div>
//     )
// }