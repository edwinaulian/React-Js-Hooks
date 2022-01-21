import React, { useRef  } from 'react';
import Button from '../common/components/Button';

function UseEffectTutorial () {
    const buttonReff = useRef(null);

    return (
        <div>
            <button onClick={() => {  buttonReff.current.alterToggle() }}>
                Button From Parent
            </button>
            <br/>
            <Button ref={buttonReff}></Button>
        </div>
    )

}

export default UseEffectTutorial;