import React from "react";
import { useState, useRef } from "react";

export const TestFunctions = () => {
    const [myNumber, setMyNumber] = useState(0)

    return(
        <>
            <input 
            value={myNumber}
            type="number"
            />
        </>
    )
}