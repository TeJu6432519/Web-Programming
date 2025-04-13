import React, { useState } from 'react';

function Rev(){
    const [rev,setrev]=useState("");
    const [p,setP]=useState("");

    const handleChange=()=>{
        const txt=document.getElementById("txt").value;
        const rtxt=txt.split("").reverse().join("");
        setrev(rtxt);
        if(txt==rtxt){
            setP(true);
        }
        else{
            setP(false);
        }
        
    }

    const chkPali=()=>{
        if (p==true){
            alert("Is a palindrome!");
        }
        else{
            alert("Not a palindrome..");
        }
    }

return(
    <p>
    enter text to reverse: <input type="text" id="txt" onChange={handleChange} style={{marginRight:"20px"}}/>
    reversed text:<textarea readonly value={rev} style={{marginRight:"20px"}}></textarea>
    <button onClick={chkPali}>chk pali</button>
    </p>
);
}

export default Rev;