import React, { useCallback, useState } from "react";
import Child from "./Child";

export default function CallBackTutorial() {

    const [toggle, setToggle] = useState(false);
    const [data] = useState("Yo, pls sub to the channel");

    const returnComment = useCallback((name) => {
        return data +  name;
    }, [data]);

    return (
        <div>
            <Child returnComment={returnComment}></Child>

            <button onClick={() => { setToggle(!toggle) }}>
                {""} Toggle
            </button>
            {toggle && <h1>toggle</h1>}
        </div>
    )


}