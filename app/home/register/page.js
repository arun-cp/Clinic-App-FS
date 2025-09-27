'use client'

import { useRouter } from "next/navigation";
import "./Cregister.css";
import reg from "@/app/Images/clinicreg.png";
import { useRef } from "react";

export default function Cregister() {
    const router = useRouter();
    const clnc = useRef({
        cname : null,
        oname : null,
        adrs : null,
        cnum : null,
        cmail : null
    });

    async function postclinic(creg) {
        const resp = await fetch('/api/postclinic', {
            method : 'POST',
            body : JSON.stringify(creg),
            headers : {
                'Content-Type': 'application/json'
            } 
        });
        const data = await resp.json();
        console.log(data);
    }

    function regdata(e) {
        e.preventDefault();
        const creg = {
            cid : null,
            cname : clnc.current.cname.value,
            oname : clnc.current.oname.value,
            adrs : clnc.current.adrs.value,
            cnum : clnc.current.cnum.value,
            cmail : clnc.current.cmail.value
        };
        postclinic(creg);
    }

    return(
        <div className="regmain">
            <img src={reg.src} />
            <div className="regfill">
                <h1>Register Now As Clinic</h1>
                <form onSubmit={regdata}>
                    <div className="regip">
                        <label>Clinic Name :</label>
                        <input type="text" placeholder="Enter Clinic Full Name" ref={(ip) => (clnc.current.cname = ip)} required />
                    </div>
                    <div className="regip">
                        <label>Owner Name :</label>
                        <input type="text" placeholder="Enter Owner Full Name" ref={(ip) => (clnc.current.oname = ip)} required />
                    </div>
                    <div className="regip">
                        <label>Address :</label>
                        <textarea type="text" placeholder="Detailed Full Address" ref={(ip) => (clnc.current.adrs = ip)} required />
                    </div>
                    <div className="regip">
                        <label>Contact Number :</label>
                        <input type="text" placeholder="Enter Contact Number with code" ref={(ip) => (clnc.current.cnum = ip)} required />
                    </div>
                    <div className="regip">
                        <label>Email Id :</label>
                        <input type="text" placeholder="Enter Email Id" ref={(ip) => (clnc.current.cmail = ip)} required />
                    </div>
                    <div className="regbtn">
                        <button onClick={() => router.push('/home')}>Cancel</button>
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}