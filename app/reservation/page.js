"use client";

import Link from "next/link";
import DownloadBtn from "../Components/DownloadBtn";
import Ticket from "../Components/Ticket";
import './reservation.css';
import { useContext, useEffect } from "react";
import { UsersContext } from "../Contexts/UsersContext";
import { useRouter } from "next/navigation";

export default function ReservationPage() {
    const { isLoggedin } = useContext(UsersContext);
    const router = useRouter();

    useEffect(() => {
        if (!isLoggedin) {
            router.push('/');
        }
    }, [isLoggedin, router]);

    if (!isLoggedin) return null;

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="d-flex flex-column text-center">
                <nav className="breadcrumb">
                    <Link className="breadcrumb-item" href="/dashboard">Dashboard</Link>
                    <span className="breadcrumb-item active" aria-current="page">Reservation Ticket</span>
                </nav>

                <h1>Your Appointment is Confirmed!</h1>
                <p>Please see your details below.</p>
                <Ticket />
                <DownloadBtn />
            </div>
        </div>
    );
}