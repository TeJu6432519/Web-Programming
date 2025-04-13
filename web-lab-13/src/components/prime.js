import React from 'react';

function Prime(){

    const isPrime=()=>{
        const number=parseInt(document.getElementById("num").value);
        
        let flag=1;
        if(number<2){flag=0};
        for(let i=2;i<number;i++){
            if(number%i==0){
                flag=0;
            }
        }
        if(flag==0){
            alert("not prime..");
        }
        else{
            alert("is prime!");
        }
        
    };

return(
    <>
     num: <input type="text" name="num" id="num" style={{marginRight:"20px"}}/>
    <button onClick={isPrime}>chk if prime</button><br/><br/>
    </>
);
}

export default Prime;
