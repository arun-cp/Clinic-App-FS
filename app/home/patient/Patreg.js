'use client'

import "./Patreg.css";

export default function Patreg() {

    return(
        <div className="ptrgmain">
            <h1>Patient Registration</h1>
            <form>
                <h3>Personal Information</h3>
                <div className="ptrgip">
                    <div>
                        <label>Name :</label>
                        <input type="text" placeholder="Enter Full Name" required />
                    </div>
                    <div>
                        <label>Gender :</label>
                        <select defaultValue="" required>
                            <option value="" disabled>Select Gender</option>
                            <option value="A">Male</option>
                            <option value="B">Female</option>
                            <option value="C">Other</option>
                        </select>
                    </div>
                </div> 
                <div className="ptrgip">
                    <div>
                        <label>Date of birth :</label>
                        <input type="date" placeholder="Enter Date of Birth" required />
                    </div>
                    <div>
                        <label>Blood Group :</label>
                        <select defaultValue="" required>
                            <option value="" disabled>Select Blood Group</option>
                            <option value="A">A+</option>
                            <option value="A">A-</option>
                            <option value="B">B+</option>
                            <option value="B">B-</option>
                            <option value="C">AB+</option>
                            <option value="C">AB-</option>
                            <option value="C">O-</option>
                            <option value="C">O+</option>
                        </select>
                    </div>
                </div> 
                <div className="ptrgip">
                    <div>
                        <label>Height :</label>
                        <input type="number" placeholder="Enter Height in cm" required />
                    </div>
                    <div>
                        <label>Weight :</label>
                        <input type="number" placeholder="Enter Weight in kg" required />
                    </div>
                </div>
                <div className="ptrgip">
                    <div>
                        <label>Marital status:</label>
                        <select defaultValue="" required>
                            <option value="" disabled>Select Marital Status</option>
                            <option value="A">Single</option>
                            <option value="B">Married</option>
                            <option value="C">Divorced</option>
                        </select>
                    </div>
                </div>
                <h3>Address Details</h3>
                <div className="ptrgip">
                    <div>
                        <label>Address Line 1 :</label>
                        <input type="text" placeholder="Enter Address Line 1" required />
                    </div>
                    <div>
                        <label>Address Line 2 :</label>
                        <input type="text" placeholder="Enter Address Line 2" required />
                    </div>
                </div>
                <div className="ptrgip">
                    <div>
                        <label>Mobile Number :</label>
                        <input type="text" placeholder="Enter Mobile Number" required />
                    </div>
                    <div>
                        <label>Email Id :</label>
                        <input type="text" placeholder="Enter Email Id" required />
                    </div>
                </div>
                <h3>Medical Information</h3>
                <div className="ptrgip">
                    <div>
                        <label>Previous Illness :</label>
                        <input type="text" placeholder="Enter Previous Illness in brief" required />
                    </div>
                    <div>
                        <label>Current Medications :</label>
                        <input type="text" placeholder="Enter Current Medications" required />
                    </div>
                </div>
                <h3>Emergency Contact Information</h3>
                <div className="ptrgip">
                    <div>
                        <label>Emergency Contact Name :</label>
                        <input type="text" placeholder="Enter Emergrncy Contact Name" required />
                    </div>
                    <div>
                        <label>Emergency Contact Relationship :</label>
                        <input type="text" placeholder="Enter Emergency Contact Relationship" required />
                    </div>
                </div>
                <div className="ptrgip">
                    <div>
                        <label>Emergency Contact Number :</label>
                        <input type="text" placeholder="Enter Emergency Contact Number" required />
                    </div>
                </div>
                <button type="submit">Register Patient</button>
            </form>
        </div>
    )
}