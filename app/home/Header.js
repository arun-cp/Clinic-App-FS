'use client'

import "./Header.css";
import icon from "../Images/headicon.png";
import head from "../Images/heading.png";
import Clogin from "./Clogin";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Header(){
    const [ login, setlogin ] = useState(false);
    const { data: session , status} = useSession();
    const router = useRouter();

    function sign() {
        if(session)
            signOut({ callbackUrl: "/" })
        else
            setlogin(true)
    }

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
                    <div onClick={() => router.push('/home/clinic')}>
                        <h3>Clinic Manage</h3>
                    </div>
                    <div onClick={() => router.push('/home/patient')}>
                        <h3>Patient Service</h3>
                    </div>
                    <div className="headlog" onClick={sign}>
                        <h3>{session ? session.user.name : "Login"}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}