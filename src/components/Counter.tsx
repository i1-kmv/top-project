import React, {useState} from 'react';
import './Counter.scss'

export const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount((prevValue) => prevValue + 1)
    }

    const decrement = () => {
        setCount((prevValue) => prevValue - 1)
    }

    return (
        <div className='counter'>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;
