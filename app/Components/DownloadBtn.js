"use client";

export default function DownloadBtn() {
    function handlePrint() {
        window.print();
    }

    return (
        <button className="btn btn-primary mt-4" onClick={() => { handlePrint() }}> <i className="bi bi-download"></i> Download / Save Ticket</button>

    );
}