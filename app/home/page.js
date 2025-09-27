'use client'

import "./Home.css";
import mainimg1 from "../Images/homeimg.png";
import mainimg2 from "../Images/homeimg2.png";
import reg from "../Images/register.png";
import book from "../Images/book.png";
import appoint from "../Images/appoint.png";
import patient from "../Images/patient.png";
import report from "../Images/report.png";
import self from "../Images/self.png";
import { useRouter } from "next/navigation";

export default function Home(){
    const router = useRouter();
    return(
        <div className="homemain">
            <div className="headtag">
                <img src={mainimg2.src} alt="alt" />
                <div>
                    <h1 style={{ fontSize: "300%" }}>Transform the Way You Manage Your Clinic !</h1>
                    <p style={{ fontSize: "150%" }}>Seamlessly manage appointments, patients, and records - all in one place.</p>
                    <br/>
                    <button onClick={() => router.push('/home/register')}>
                        <span>
                            Register Now <img src={reg.src} alt="alt" style={{ width: '25px', height: 'auto' }}/>
                        </span>
                    </button>
                </div>
            </div>
            <div className="headtag">
                <div>
                    <h1 style={{ fontSize: "300%" }}>Book Your Appointment in Just a Few Clicks !</h1>
                    <p style={{ fontSize: "150%" }}>Schedule appointments at your convenience - anytime, anywhere</p>
                    <br/>
                    <button>
                        <span>
                            <img src={book.src} alt="alt" style={{ width: '25px', height: 'auto' }}/> Book Now
                        </span>
                    </button>
                </div>
                <img src={mainimg1.src} alt="alt" />
            </div>
            <div className="homecont">
                <div>
                    <img src={appoint.src} alt="Appointments" style={{ width: '25%', height: 'auto' }} />
                    <h3>Appointments</h3>
                    <hr/>
                    <p>
                        Easily schedule appointments with just a few clicks.
                        Send automated reminders to patients.
                        Reduce no-shows and manage time efficiently.
                        Seamless booking, anytime.
                    </p>
                </div>
                <div>
                    <img src={patient.src} alt="Patient Records" style={{ width: '25%', height: 'auto' }} />
                    <h3>Patient Records</h3>
                    <hr/>
                    <p>
                        All medical records in one place.
                        Access patient history instantly and securely.
                        Save time with organized digital files.
                        Better insights for better treatment.
                    </p>
                </div>
                <div>
                    <img src={report.src} alt="Reports & Analytics" style={{ width: '25%', height: 'auto' }} />
                    <h3>Reports & Analytics</h3>
                    <hr/>
                    <p>
                        Get powerful insights at a glance.
                        Track clinic performance in real time.
                        Measure appointments, revenue, and growth.
                        Make smarter data-driven decisions.
                    </p>
                </div>
                <div>
                    <img src={self.src} alt="Patient Portal" style={{ width: '25%', height: 'auto' }} />
                    <h3>Patient Portal</h3>
                    <hr/>
                    <p>
                        Give patients easy self-service tools.
                        Book, cancel, or reschedule online.
                        View prescriptions and medical history.
                        24/7 access at their fingertips.
                    </p>
                </div>
            </div>
            <div className="homefoot">
                <p>© 2025 Clinic Management Portal. All rights reserved.</p>
            </div>
        </div>
    )
}