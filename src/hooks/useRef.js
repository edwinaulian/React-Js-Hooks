import React, { useRef } from 'react';

function UseRefTutorial () {

    const inputRef = useRef(null);

    const onClickEve = () => {
        console.log("inputRef", inputRef.current.value);
        inputRef.current.focus();
        inputRef.current.value = "";
    }

    return (
        <div>
            <h1>Hello</h1>
            <input type="text" placeholder="ng.Edwin" ref={inputRef}></input>
            <button onClick={onClickEve}>Change Name</button>
        </div>
    )
}

export default UseRefTutorial;