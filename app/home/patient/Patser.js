'use client'

import "./Patser.css";

export default function Patser() {

    return(
        <div className="ptsrmain">
           <form>
                <h1>Patient Self Service Portal</h1>
                <br/>
                <div className="ptsrip">
                    <label>Mobile Number :</label>
                    <input type="text" placeholder="Enter Mobile Number" required />
                </div>
                <div className="ptsrip">
                    <label>Key Id :</label>
                    <input type="text" placeholder="Enter Key Id" required />
                </div>
                <button>Proceed to Service</button>
           </form>
        </div>
    )
}