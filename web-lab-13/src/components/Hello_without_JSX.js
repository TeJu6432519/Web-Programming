import React, { createElement } from 'react';

function Hello(){
    const Message="This is a message.";

    return createElement(
        "div",
        null,
        createElement("h1",null,"Hello, React! without jsx"),
        createElement("p",null,Message)
    );
}

export default Hello;