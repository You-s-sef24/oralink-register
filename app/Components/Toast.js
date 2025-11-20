export default function Toast({ onClose, msg }) {
    return (
        <div
            aria-live="polite"
            aria-atomic="true"
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "200px" }}
        >
            <div className="toast show fade position-fixed bottom-0 end-0 mb-4 ms-4" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    {/* <img src="" className="rounded me-2" alt="OraLink" /> */}
                    <strong className="me-auto">OraLink</strong>
                    <small>Now</small>
                    <button
                        type="button"
                        className="btn ms-2 mb-1 close"
                        aria-label="Close"
                        onClick={onClose}
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="toast-body">
                    {msg}
                </div>
            </div>
        </div>
    );
}