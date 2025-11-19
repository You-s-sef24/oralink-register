import Ticket from "./Ticket";

export default function TicketModal({ onClose, appointment }) {
    return (
        <div
            className={`modal d-block fade show`}
            id="modalId"
            tabIndex="-1"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            role="dialog"
            aria-labelledby="modalTitleId"
            aria-hidden="true"
        >
            <div
                className="modal-dialog modal-dialog-scrollable modal-dialog-centered"
                role="document"
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalTitleId">
                            Ticket Details
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <Ticket id={appointment.id} />
                    </div>
                </div>
            </div>
        </div>
    );
}