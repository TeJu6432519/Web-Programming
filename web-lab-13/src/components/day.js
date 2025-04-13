import React from 'react';

function Day(){
    const days=["monday","tuesday","wednesday","thursday","friday"]
    const today=new Date().getDay();

return(
    <h3>
    Today is: {days[today-1]}
    </h3>
);
}

export default Day;