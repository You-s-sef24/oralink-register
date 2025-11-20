"use client";

import { useContext, useState } from "react";
import AppointmentsCard from "./AppointmentsCard";
import { UsersContext } from "../Contexts/UsersContext";
import { useRouter } from "next/navigation";
import Toast from "./Toast";

export default function Dashboard() {
    const { currentUser, setCurrentUser } = useContext(UsersContext);
    const [showToast, setShowToast] = useState(false);
    const router = useRouter();
    const [QueueNumber] = useState(() =>
        Math.floor(Math.random() * 10)
    );

    const appointments = currentUser?.appointments.map((appointment, index) => {
        return (
            <AppointmentsCard key={index} appointment={appointment} />
        );
    });

    function handleBooking() {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowStr = tomorrow.toISOString().split("T")[0];
        const hasTomorrowAppointment = currentUser.appointments.some(
            (app) => app.date === tomorrowStr
        );
        if (hasTomorrowAppointment) {
            setShowToast(true);
            return;
        }

        const newAppointmentsList = [...currentUser.appointments];
        const lastAppointment = {
            date: tomorrowStr,
            time: '',
            status: 'Pending',
            queueNumber: QueueNumber
        };
        newAppointmentsList.push(lastAppointment);
        setCurrentUser({ ...currentUser, appointments: newAppointmentsList, lastAppointment: lastAppointment });
        router.push('/reservation');
    }

    return (
        <div className='w-100 p-3 mt-5'>
            <div className="row align-items-center">
                <div className="col">
                    <h3>My Appointments</h3>
                    <p className="text-muted">View and manage your dental appointments</p>
                </div>
                <div className="col">
                    <button className={`d-flex align-items-center btn btn-lg btn-primary float-end gap-2`} onClick={handleBooking}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                        Book New Appointment
                    </button>
                </div>
            </div>

            <div className="rounded border overflow-auto p-4 mt-3">
                <div className="row align-items-center d-sm-flex d-none">
                    <div className="col-5 text-center">
                        <h5 className="m-0">Date</h5>
                    </div>
                    <div className="col text-center">
                        <h5 className="m-0">Status</h5>
                    </div>
                    <div className="col-3 text-center">
                        <h5 className="m-0">Action</h5>
                    </div>
                </div>
                <hr />
                {appointments}
            </div>
            {showToast && <Toast onClose={() => { setShowToast(false) }} msg={"You already have an appointment for tomorrow."} />}
        </div >
    );
}