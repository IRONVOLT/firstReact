import React from "react";
import { useState } from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }

    function decrement() {
        setCounter(counter - 1);
    }

    return (
        <>
        <h1>{counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </>
    )
}