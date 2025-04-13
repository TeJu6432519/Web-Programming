import React,{useState} from 'react';

function Fruit(){
    const [List,setList]=useState([]);
    const [InputValue,setInputValue]=useState("");

    const handleChange = (event)=>{
        setInputValue(event.target.value);
    };

    const addFruit = () =>{
        if(InputValue.trim()!=""){
            setList([...List,InputValue]);
            setInputValue("");
        }
    };

    return (
        <>
        <input type="text" name="fruit1" onChange={handleChange}/>
        <button onClick={addFruit}>Add</button>
        <ul>
            {
            List.map(
                (fruit,index)=>(<li key={index}>{fruit}</li>)
            )
            }
        </ul>
        </>
    );
}

export default Fruit;