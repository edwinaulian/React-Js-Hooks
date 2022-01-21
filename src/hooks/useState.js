import React, { useState } from 'react';
import _ from 'lodash';

const UseSateTutorial = () => {

    const [inputValue, setInputValue] = useState("Edwin Auliano");
    const [counterPluse, setcounterPluses] = useState(0);

    let onChanges = (eve) => {
        const newValue = eve.target.value;
        setInputValue(newValue);
    };

    let onClicks = () => {
        setcounterPluses(counterPluse + 1);
    }

    let onClicksmin = () => {
        setcounterPluses(counterPluse - 1);
        if (_.eq(counterPluse, 0)) {
            return setcounterPluses(0);
        }
    }
    
    return (
        <div>
            <div>
                <input placeholder="enter something" onChange={onChanges}></input>
                {inputValue}
            </div>
            <div>
                <button onClick={onClicksmin}>-</button>
                {counterPluse}
                <button onClick={onClicks}>+</button>
            </div>
        </div>
    )
}

export default UseSateTutorial;