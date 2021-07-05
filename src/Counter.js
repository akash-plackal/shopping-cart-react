import React, { useState } from 'react';
import './Counter.css';

function Counter({ step = 1 }) {
    // useState() returnes array with two values 0 = the state , 1 = a fun to change the state
    const [count, setCount] = useState(0) // deconstructing useStae array
    return (
        <div className="Counter">
            <h2>{count}</h2>
            <button onClick={() => setCount(count + step)}>+{step}</button>
        </div>
    )
}
export default Counter;