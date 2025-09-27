'use client';

import "./Cldash.css";
import map from "@/app/Images/map.png";

export default function Cldash({ clnc, load }) {
    
    return(
        <div className="dashmain">
            {console.log(clnc)}
            <div className="dashhead">
                <div>
                    <h2>{clnc.cname}</h2>
                    <h3>{clnc.oname}</h3>
                    <h4>{clnc.adrs}</h4>
                    <h4>{clnc.cnum}</h4>
                    <h4>{clnc.cmail}</h4>
                </div>
                <img src={map.src}  alt="img"/>
            </div>
        </div>
    )
}