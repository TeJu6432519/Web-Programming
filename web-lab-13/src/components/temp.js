import React, { useState } from 'react';

function Temp(){

    const [F,setF]=useState("");
    const[C,setC]=useState("");

    const calcC=()=>{
        const f=parseFloat(document.getElementById("f").value);
        const res1= (((f - 32) * 5) / 9).toFixed(2);
        setC(res1);
    }

    const calcF=()=>{
        const c=parseFloat(document.getElementById("c").value);
        const res2= ((c * 9) / 5 + 32).toFixed(2);
        setF(res2);
    }

return(
    <>
    Celcius: <input type="text" id="c" onChange={calcF}style={{ marginRight: "20px" }}/>
    converted Fahrenheit: <textarea readonly value={F}>°F</textarea><br/><br/>
    Fahrenheit: <input type="text" id="f" onChange={calcC}style={{ marginRight: "20px" }}/>
    converted Celcius:<textarea readonly value={C}>°C</textarea>
    </>
);
}

export default Temp;