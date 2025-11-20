"use client";

import { useState } from "react";
import TicketModal from "./TicketModal";

export default function AppointmentsCard({ appointment }) {
    const [show, setShow] = useState(false);

    return (
        <div className="mb-2">
            <div className="row align-items-center gap-3 p-2">
                <div className="col-sm-5 d-flex justify-content-center align-items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar text-[#0d6efd] text-primary" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                    {appointment.date} at {appointment.time}
                </div>
                <div className="col text-center">
                    <span className={`rounded-pill text-end px-3 py-1 fw-semibold
                    ${appointment.status === 'Completed' ? 'bg-success bg-opacity-10 text-success' :
                            appointment.status === 'Pending' ? 'bg-secondary bg-opacity-10 text-secondary' : ''}`}>{appointment.status}</span>
                </div>
                <div className="col-sm-3 d-flex justify-content-center">
                    <button className="btn btn-outline-primary d-flex align-items-center gap-1" onClick={() => { setShow(true) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye" aria-hidden="true"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        View Ticket
                    </button>
                </div>
            </div>
            <hr />
            <div className="w-100">
                {show && <TicketModal appointment={appointment} onClose={() => { setShow(false) }} />}
            </div>
        </div>
    );
}