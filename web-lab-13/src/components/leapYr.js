import React from 'react';

function Leap(){

    const chkLeap=()=>{
        const yr=parseInt(document.getElementById("leap").value);
        if((yr%4==0 && yr%100!=0)||(yr%400==0)){
            alert("it is a leap yr!");
        }
        else{
            alert("it is not a leap yr..");
        }
    }

return(
    <>
    Year to check is Leap: <input type="text" id="leap"/>
    <button onClick={chkLeap}>chk if Leap Yr</button>
    </>
);
}

export default Leap;