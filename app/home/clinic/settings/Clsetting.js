'use client';

import { useEffect, useState } from "react";
import "./Clsetting.css";
import map from "@/app/Images/map.png";
import Popadddoc from "./Popadddoc";

export default function Clsetting({ clnc }) {
    const [ popdoc , setpopdoc ] = useState(false);
    const [ docs , setdocs ] = useState([]);

    async function getdata(){
        try {
            const res = await fetch('/api/getdoc');
            const data = await res.json();
            const fltrdata = data.filter((dat) => dat.cid == clnc.cid);
            setdocs(fltrdata);
            console.log(docs);
        } catch (err) {
            console.log('Failed to fetch');
        } finally {

        }
    }

    useEffect(() => {
        getdata();
    }, [popdoc])

    return(
        <div className="setmain">
            {console.log(docs)}
            {popdoc ? <Popadddoc cancel={setpopdoc} cid={clnc.cid} /> : null}
            <div className="sethead">
                <div>
                    <h2>{clnc.cname}</h2>
                    <h3>{clnc.oname}</h3>
                    <h4>{clnc.adrs}</h4>
                    <h4>{clnc.cnum}</h4>
                    <h4>{clnc.cmail}</h4>
                </div>
                <button>Edit</button>
            </div>
            <div className="setdoc">
                <div className="dochead">
                    <h2>Doctors List</h2>
                    <button onClick={() => setpopdoc(true)}>Add Doctor</button>
                </div>
                <hr />
                <div className="doclist">
                    {docs.map((doc, index) => (
                        <div className="docdet" key={index}>
                            <div className="docl">
                                <h2>Dr. {doc.dname}</h2>
                                <h3>{doc.dsp}</h3>
                                <h4>{doc.ddgr}</h4>
                                <h4>{doc.dxp}</h4>
                                <h4>{doc.dmail}</h4>
                                <h4>{doc.dnum}</h4>
                            </div>
                            <div className="doclbtn">
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}