import React, { useContext } from "react";
import { AppContext } from './ContextTutorial';
import '../../App.css';

function Login() {

    const { setUserName } = useContext(AppContext);

    return (
        <div>
            <input className="ipt-user"
                onChange={(event) => {
                    setUserName(event.target.value);
                }}
            />
        </div>
    );
}

export default Login;