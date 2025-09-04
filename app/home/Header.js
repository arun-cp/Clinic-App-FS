'use client'

import "./Header.css";
import icon from "../Images/headicon.png";
import head from "../Images/heading.png";
import Clogin from "./Clogin";
import { useState } from "react";

export default function Header(){
    const [ login, setlogin ] = useState(false);
    return(
        <div className="headmain">
            {login ? <Clogin cancel={setlogin} /> : null }
            <div className="headbody">
                <div className="headleft">
                    <img src={icon.src} alt="alt" style={{ width: '6%', height: 'auto' }}/>
                    <img src={head.src} alt="alt" />
                </div>
                <div className="headright">
                    <div>
                        <h3>About Us</h3>
                    </div>
                    <div>
                        <h3>Consultation</h3>
                    </div>
                    <div>
                        <h3>Patient Service</h3>
                    </div>
                    <div onClick={() => setlogin(true)}>
                        <h3>Login</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}