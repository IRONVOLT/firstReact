import React from "react";
import clasess from './MyInput.module.css';

export const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={clasess.myInput} {...props} type="text" />
    );
});