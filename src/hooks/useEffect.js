import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UseEffectTutorial () {
    const [data, setData] = useState("");

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
            console.log(res.data);
            setData(res.data[0].name);
        });
    }, []);

    return <div>Hello world! {data}</div>
}

export default UseEffectTutorial;