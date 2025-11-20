"use client";

import { useContext } from "react";
import { UsersContext } from "../Contexts/UsersContext";

export default function Ticket({ id }) {
    const { currentUser } = useContext(UsersContext);

    function handleDownload() {
        import("html2pdf.js").then((html2pdf) => {
            const ticket = document.getElementById("ticket");

            const options = {
                margin: 10,
                filename: "ticket.pdf",
                image: { type: "jpeg", quality: 1 },
                html2canvas: { scale: 3 },
                jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
            };

            html2pdf.default().set(options).from(ticket).save();
        });
    }



    return (
        <div id="ticket" className="shadow rounded overflow-hidden w-100">
            <div className="bg-primary text-white p-4">
                <p className="text-center">Your Queue Number</p>
                <h1 className="text-center fw-bold">{currentUser?.lastAppointment.queueNumber}</h1>
            </div>
            <div className="row align-items-center">
                <div className="col-12 col-md-6 bg-white px-4 my-2">
                    <div className="d-flex align-items-center gap-2">
                        <span className="bg-primary text-white rounded p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user text-[#0d6efd]" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </span>
                        <div className="d-flex flex-column">
                            <small className="text-start text-primary">Patient Name</small>
                            <p className="fw-bold m-0">{currentUser?.name}</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 bg-white px-4 my-2">
                    <div className="d-flex align-items-center gap-2">
                        <span className="bg-primary text-white rounded p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hash text-[#0d6efd]" aria-hidden="true"><line x1="4" x2="20" y1="9" y2="9"></line><line x1="4" x2="20" y1="15" y2="15"></line><line x1="10" x2="8" y1="3" y2="21"></line><line x1="16" x2="14" y1="3" y2="21"></line></svg>                        </span>
                        <div className="d-flex flex-column">
                            <small className="text-start text-primary">National ID</small>
                            <p className="fw-bold m-0">{currentUser?.nationalID}</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 bg-white px-4 my-2">
                    <div className="d-flex align-items-center gap-2">
                        <span className="bg-primary text-white rounded p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar text-[#0d6efd]" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                        </span>
                        <div className="d-flex flex-column">
                            <small className="text-start text-primary">Appointment Date</small>
                            <p className="text-start fw-bold m-0">{currentUser?.lastAppointment.date}</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 bg-white px-4 my-2">
                    <div className="d-flex align-items-center gap-2">
                        <span className="bg-primary text-white rounded p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock text-[#0d6efd]" aria-hidden="true"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>                        </span>
                        <div className="d-flex flex-column">
                            <small className="text-start text-primary">Time</small>
                            <p className="fw-bold m-0">{currentUser?.lastAppointment.time}</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 text-center bg-white mb-3">
                    <button className="btn btn-primary mt-4" onClick={handleDownload}> <i className="bi bi-download"></i> Download / Save Ticket</button>
                </div>
            </div>
        </div>
    );
}