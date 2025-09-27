import { useRouter } from "next/navigation";
import "./Popadddoc.css";
import { useRef } from "react";

export default function Popadddoc({ cancel, cid }) {
    const router = useRouter;
    const doc = useRef({
        dname : null,
        dsp : null,
        ddgr : null,
        dxp : null,
        dnum : null,
        dmail : null
    });

    async function postdoc(dreg) {
        const resp = await fetch('/api/postdoc', {
            method : 'POST',
            body : JSON.stringify(dreg),
            headers : {
                'Content-Type': 'application/json'
            } 
        });
        const data = await resp.json();
        console.log(data);
        cancel(false)
    }

    function regdata(e) {
        e.preventDefault();
        const dreg = {
            did : Math.floor(1000 + Math.random() * 9000),
            cid : cid,
            dname : doc.current.dname.value,
            dsp : doc.current.dsp.value,
            ddgr : doc.current.ddgr.value,
            dxp : doc.current.dxp.value,
            dnum : doc.current.dnum.value,
            dmail : doc.current.dmail.value
        };
        postdoc(dreg);
    }
    

    return(
        <div className="popbg">
            <div className="adddocbox">
                <h1>Register New Doctor</h1>
                <hr/>
                <form onSubmit={regdata} >
                    <div className="docip">
                        <label>Doctor Name :</label>
                        <input type="text" placeholder="Enter Doctor Full Name" ref={(ip) => (doc.current.dname = ip)} required />
                    </div>
                    <div className="docip">
                        <label>Specialization :</label>
                        <input type="text" placeholder="Enter Specialization" ref={(ip) => (doc.current.dsp = ip)} required />
                    </div>
                    <div className="docip">
                        <label>Degree :</label>
                        <input type="text" placeholder="Detailed Degree" ref={(ip) => (doc.current.ddgr = ip)} required />
                    </div>
                    <div className="docip">
                        <label>Expirience :</label>
                        <input type="number" placeholder="Enter Expirience in years" ref={(ip) => (doc.current.dxp = ip)} required />
                    </div>
                    <div className="docip">
                        <label>Contact Number :</label>
                        <input type="text" placeholder="Enter Contact Number with code" ref={(ip) => (doc.current.dnum = ip)} required />
                    </div>
                    <div className="docip">
                        <label>Email Id :</label>
                        <input type="text" placeholder="Enter Email Id" ref={(ip) => (doc.current.dmail = ip)} required />
                    </div>
                    <div className="docbtn">
                        <button onClick={() => cancel(false)}>Cancel</button>
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}