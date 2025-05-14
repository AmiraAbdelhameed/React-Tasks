import React from "react";
import style from './style.module.css';

const Navbar =()=>{
    return(
        <>
        <nav className={style['nav']}>
            <ul>
                <li><a>Home</a></li>
                <li><a>Movies</a></li>
                <li><a>About</a></li>
            </ul>
        </nav>
        </>
    )
}
export default Navbar;