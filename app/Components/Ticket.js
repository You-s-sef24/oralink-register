export default function Ticket() {
    return (
        <div className="shadow rounded overflow-hidden">

            <div className="bg-primary text-white p-4">
                <p className="text-center">Your Queue Number</p>
                <h1 className="text-center fw-bold">102</h1>
            </div>

            <div className="bg-white p-4">
                <div className="d-flex align-items-center gap-2">
                    <span className="bg-primary text-white rounded p-2"><i className="bi bi-person"></i></span>
                    <div className="d-flex flex-column">
                        <small className="text-primary">Patient Name</small>
                        <p className="fw-bold m-0">Youssef</p>
                    </div>
                </div>
                <hr />
                <div className="d-flex align-items-center gap-2">
                    <span className="bg-primary text-white rounded p-2"><i className="bi bi-person"></i></span>
                    <div className="d-flex flex-column">
                        <small className="text-primary">Estimated Time</small>
                        <p className="fw-bold m-0">10:30 AM</p>
                    </div>
                </div>
            </div>

        </div>
    );
}