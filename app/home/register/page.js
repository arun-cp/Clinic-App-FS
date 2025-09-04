'use client'

import { useRouter } from "next/navigation";
import "./Cregister.css";
import reg from "@/app/Images/clinicreg.png"

export default function Cregister() {
    const router = useRouter();
    return(
        <div className="regmain">
            <img src={reg.src} />
            <div className="regfill">
                <h1>Register Now As Clinic</h1>
                <form>
                    <div className="regip">
                        <label>Clinic Name :</label>
                        <input type="text" placeholder="Enter Clinic Full Name"  required />
                    </div>
                    <div className="regip">
                        <label>Owner Name :</label>
                        <input type="text" placeholder="Enter Owner Full Name"  required />
                    </div>
                    <div className="regip">
                        <label>Address :</label>
                        <textarea type="text" placeholder="Detailed Full Address"  required />
                    </div>
                    <div className="regip">
                        <label>Contact Number :</label>
                        <input type="text" placeholder="Enter Contact Number with code"  required />
                    </div>
                    <div className="regip">
                        <label>Email Id :</label>
                        <input type="text" placeholder="Enter Email Id"  required />
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