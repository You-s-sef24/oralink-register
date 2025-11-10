import Ticket from "../Components/Ticket";

export default function ReservationPage() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="d-flex flex-column text-center">
                <h1>Your Appointment is Confirmed!</h1>
                <p>Please see your details below.</p>
                <Ticket />
            </div>
        </div>
    );
}