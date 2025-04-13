import React, { useState } from 'react';

function SquareSum(){
    const[result,setResult]=useState("");

    const handlecalc=()=>{
        const inp1=parseInt(document.getElementById("num1").value);
        const inp2=parseInt(document.getElementById("num2").value);
        const res=(inp1**2)+(inp2**2);
        setResult(res);
    }

return(
    <>
    <p>
    num1: <input type="text" name="num1" id="num1" style={{marginRight:"20px"}}/>
    num2: <input type="text" name="num2" id="num2" style={{marginRight:"20px"}}/>
    <button onClick={handlecalc}>calc square sum</button><br/><br/>
    sum of squares: <textarea readOnly value={result}></textarea>
    </p>
    </>
);
}

export default SquareSum;