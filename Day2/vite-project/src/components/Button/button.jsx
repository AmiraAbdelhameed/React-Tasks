import React from "react";
import style from './style.module.css';

const Button = ({ action = () => { },  text }) => {

    return (
        <>
            <button onClick={action} >{text}</button>
        </>
    )
}

export default Button