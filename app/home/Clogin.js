'use client';

import "./Clogin.css";
import { useRouter } from 'next/navigation';
import log from "../Images/login.png"
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Clogin({cancel}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const router = useRouter();

    async function handleSubmit(e){
        e.preventDefault();
        const res = await signIn("credentials", {
            username,
            password,
            redirect: false,
        });
        if (res.ok) {
            console.log("Success");
            setError(false);
            cancel(false);
        } else {
            setError(true);
        }
    };

    return(
        <div className="popbg">
            <div className="cloginbox">
                <img src={log.src} alt="img"/>
                <div className="clogincont">
                    <form onSubmit={handleSubmit}>
                        <h2>Clinic Admin Login</h2>
                        <p>Please Login with Credentials</p>
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        {error ? <p style={{color : "red"}}>Invalid Username or Password</p> : null}
                        <div className="cloginbtn">
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