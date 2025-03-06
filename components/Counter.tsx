'use client'

import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };
    return (
        <div className="flex gap-4 text-4xl text-sky-400 justify-center">
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <h2>{`count is ${count}`}</h2>
        </div>
    )
}
export default Counter