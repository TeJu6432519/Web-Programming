import React, { useState } from 'react';

function Greeting({isMorning}){
return(
    <>
    {isMorning?"Good Morning!":"Good Evening!"}
    </>
);
}

export default Greeting;