"use client";

import { useContext } from "react";
import { UsersContext } from "../Contexts/UsersContext";

export default function Ticket() {
    const { currentUser } = useContext(UsersContext);

    return (
        <div id="ticket" className="shadow rounded overflow-hidden">

            <div className="bg-primary text-white p-4">
                <p className="text-center">Your Queue Number</p>
                <h1 className="text-center fw-bold">102</h1>
            </div>

            <div className="bg-white p-4">
                <div className="d-flex align-items-center gap-2">
                    <span className="bg-primary text-white rounded p-2"><i className="bi bi-person"></i></span>
                    <div className="d-flex flex-column">
                        <small className="text-start text-primary">Patient Name</small>
                        <p className="fw-bold m-0">{currentUser?.name}</p>
                    </div>
                </div>
                <hr />
                <div className="d-flex align-items-center gap-2">
                    <span className="bg-primary text-white rounded p-2"><i className="bi bi-clock"></i></span>
                    <div className="d-flex flex-column">
                        <small className="text-start text-primary">Estimated Time</small>
                        <p className="text-start fw-bold m-0">10:30 AM</p>
                    </div>
                </div>
            </div>

        </div>
    );
}