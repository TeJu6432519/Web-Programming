import React, { useState } from 'react';


function Random(){

    const [r,setR]=useState("");

    const genR=()=>{
        const rand=Math.floor(Math.random()*100)+1;
        setR(rand);
    }
return(
    <>
    <button onClick={genR}>Gen random no.</button>
    Random number generated: <textarea readonly value={r}></textarea>
    </>
);
}

export default Random;