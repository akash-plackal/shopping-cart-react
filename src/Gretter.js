import React from 'react';

function Gretter({ name, age }) {
    const greet = () => {
        alert(`hello, ${name}`)
    }
    return (
        <>
            <h1>hi, I'm {name}</h1>
            <p>I'm {age} years old</p>
            <button onClick={greet}>click me</button>
        </>
    )

}

export default Gretter;

