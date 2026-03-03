import { useState } from "react";

const Active = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount((current) => current + 1)}>+</button>
            <button onClick={() => setCount((current) => current - 1)}>-</button>
        </div>
    )
};

export default Active