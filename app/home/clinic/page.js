'use client';

import { useEffect, useState } from "react";
import "./Clmnge.css";
import book from "@/app/Images/book.png";
import Cldash from "./dashboard/Cldash";
import { useSession } from "next-auth/react";
import Clsetting from "./settings/Clsetting";
import Clappoint from "./appointment/Clappoint";

export default function Clmnge() {
    const [ navs, setnavs ] = useState("dash");
    const [ clnc, setclnc ] = useState(null);
    const [ load, setload ] = useState(true);
    const { data: session , status} = useSession();

    useEffect(() => {
        async function getdata(){
            try {
                setload(true);
                const res1 = await fetch('/api/getclinic');
                const data1 = await res1.json();
                console.log(session? session.user.name : null)
                const fltrdata = data1.filter((data) => data.cid == session?.user?.name);
                console.log(fltrdata);
                setclnc(fltrdata[0]);
                console.log(clnc);
            } catch (err) {
                console.log('Failed to fetch');
            } finally {
                setload(false);
            }
        }
        if (status === "authenticated") {
            getdata();
        }
    }, [status, session])

    return(
        <div className="clmain">
            {console.log(clnc)}
            <div className="clnav">
                <h2>Clinic Dashboard</h2>
                <hr/>
                <div className="clnavcont">
                    <div className={navs == "dash" ? "active" : undefined } onClick={() => setnavs("dash")}>
                        <img src={book.src}  alt="img"/>
                        <h2>Dashboard</h2>
                    </div>
                    <div className={navs == "appt" ? "active" : undefined } onClick={() => setnavs("appt")}>
                        <img src={book.src}  alt="img"/>
                        <h2>Appointments</h2>
                    </div>
                    <div className={navs == "patn" ? "active" : undefined } onClick={() => setnavs("patn")}>
                        <img src={book.src}  alt="img"/>
                        <h2>Patients</h2>
                    </div>
                    <div className={navs == "cons" ? "active" : undefined } onClick={() => setnavs("cons")}>
                        <img src={book.src}  alt="img"/>
                        <h2>Consultation</h2>
                    </div>
                    <div className={navs == "labs" ? "active" : undefined } onClick={() => setnavs("labs")}>
                        <img src={book.src}  alt="img"/>
                        <h2>Labs</h2>
                    </div>
                    <div className={navs == "mnge" ? "active" : undefined } onClick={() => setnavs("mnge")}>
                        <img src={book.src}  alt="img"/>
                        <h2>Manage</h2>
                    </div>
                </div>
            </div>
            <div className="clcont">
                {navs === "dash" && !load ? <Cldash clnc={clnc} load={load} /> : null}
                {navs === "mnge" && !load ? <Clsetting clnc={clnc} load={load} /> : null}
                {navs === "appt" && !load ? <Clappoint clnc={clnc} /> : null}
            </div>
        </div>
    )
}