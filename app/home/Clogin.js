'use client';

import "./Clogin.css";
import { useRouter } from 'next/navigation';
import log from "../Images/login.png"
import { useState } from "react";

export default function Clogin({cancel}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const router = useRouter();

    return(
        <div className="popbg">
            <div className="qloginbox">
                <img src={log.src} />
                <div className="qlogincont">
                    <form >
                        <h2>Clinic Admin Login</h2>
                        <p>Please Login with Credentials</p>
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        {error ? <p style={{color : "red"}}>Invalid Username or Password</p> : null}
                        <div className="qloginbtn">
                            <button type="button" onClick={() => cancel(false)}>
                                <span>Cancel</span>
                            </button>
                            <button type="submit">
                                <span>Login</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}