import React, {useState} from "react";
import counter from "./counter.module.css";
const Counter = () =>{


    const [count, setCount] = useState(0)

    return (
        <>
            <div className={counter["card"]}>
                <h2>Counter from Function</h2>
                <h3>{count < 0 ? setCount((count)=> count=0) : count}</h3>
                <button onClick={() => setCount((count) => count + 1)}>Increament + </button>
                <button onClick={() => setCount((count) => count - 1)}>Decrement - </button>

            </div>

        </>
    )
}

export default Counter;