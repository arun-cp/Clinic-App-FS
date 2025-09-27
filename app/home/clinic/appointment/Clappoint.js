'use client';

import { useEffect, useRef, useState } from "react";
import "./Clappoint.css";

export default function Clappoint({ clnc }) {
    const [ docs , setdocs ] = useState([]);
    const [ appts , setappts ] = useState([]);

    async function getdata(){
        try {
            const res1 = await fetch('/api/getdoc');
            const res2 = await fetch('/api/getappt');
            const data1 = await res1.json();
            const data2 = await res2.json();
            const fdata = data1.filter((dat) => dat.cid == clnc.cid);
            setdocs(fdata);
            setappts(data2);
        } catch (err) {
            console.log('Failed to fetch');
        } finally {
            console.log("Sucess");            }
    }

    useEffect(() => {
        getdata();
    }, [])

    async function postappt(apt) {
        const resp = await fetch('/api/postappt', {
            method : 'POST',
            body : JSON.stringify(apt),
            headers : {
                'Content-Type': 'application/json'
            } 
        });
        const data = await resp.json();
        console.log(data);
        getdata();
    }
    
    function addappt(e, did) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const apt = {
            aid : Math.floor(1000 + Math.random() * 90000),
            cid : clnc.cid,
            did : did,
            adate : formData.get('apdate'),
            aptoken : formData.get('aptoken'),
            bking : []
        }
        console.log(apt);
        postappt(apt);
        e.target.reset();
    }

    return(
        <div className="appointmain">
            <h2>Appointment Schedule</h2>
            <hr/>
            <div className="appointcont">
                {docs.map((doc, index) => (
                    <div className="appointadd" key={index}>
                        <div className="appdocdet" >
                            <div className="appdocl">
                                <h2>Dr. {doc.dname}</h2>
                                <h3>{doc.dsp}</h3>
                                <h4>Ph :{doc.dnum}</h4>
                            </div>
                            <form onSubmit={(e) => addappt(e, doc.did)}>
                                <input type="date" placeholder="Select Date" name="apdate" min={new Date().toISOString().split("T")[0]} required />
                                <input type="number" placeholder="No of Token" name="aptoken" required />
                                <button type="submit">Schedule</button>
                            </form>
                        </div>
                        {appts.filter((apt) => apt.did == doc.did).length == 0 ? <h3>No Appointments Scheduled</h3> : null}
                        {appts.filter((apt) => apt.did == doc.did).map((apt, index) => (
                            <div className="apptlst" key={index}>
                                <h3>{apt.adate}</h3>
                                <h3>{apt.aptoken}</h3>
                                <button>Delete</button>
                            </div>
                        ))}
                    </div>    
                ))}
            </div>
        </div>
    )
}