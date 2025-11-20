"use client";

import '../reservation/reservation.css';

export default function Notice() {
    return (
        <div className="bg-warning-50 text-warning rounded p-4">
            <h5>Important Notice</h5>
            <ul>
                <li>Please arrive 15 minutes before your appointment</li>
                <li>Bring a valid ID for verification</li>
                <li>Present this ticket at reception</li>
            </ul>
        </div>
    );
}