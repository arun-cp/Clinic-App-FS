'use client'

import { useState } from "react";
import "./Cpatient.css";
import pat from "@/app/Images/patser.jpg";
import Patser from "./Patser";
import Patreg from "./Patreg";

export default function Cregister() {
const [ navs, setnavs ] = useState("ser");

    return(
        <div className="patmain">
            <img src={pat.src} />
            <div className="patfill">
                <div className="pathead">
                    <div className={navs == "ser" ? "active" : undefined } onClick={() => setnavs("ser")}>
                        <h2>Patient Service</h2>
                    </div>
                    <div className={navs == "reg" ? "active" : undefined } onClick={() => setnavs("reg")}>
                        <h2>Patient Register</h2>
                    </div>
                </div>
                { navs == "ser" ? <Patser /> : null }
                { navs == "reg" ? <Patreg /> : null }
            </div>
        </div>
    )
}