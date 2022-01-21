import React, { useEffect, useLayoutEffect, useRef } from 'react';

function useLayoutEffectTutorial () {

    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log('use Layout Effect', inputRef.current.value);
    }, []);

    useEffect(() => {
        inputRef.current.value = "HELLO";
    }, []);

    return (
        <div className="App">
            <input ref={inputRef} type="text" placeholder="EDWIN" defaultValue="EDWIN" style={{ width: '100%', height: '20%'}}></input>
        </div>
    )
}

export default useLayoutEffectTutorial;