"use client";

import Link from "next/link";
import './reservation.css';
import { useContext, useEffect } from "react";
import { UsersContext } from "../Contexts/UsersContext";
import { useRouter } from "next/navigation";
import Loading from "../loading";
import './reservation.css';
import BookedMsg from "../Components/BookedMsg";
import ReservedTicket from "../Components/ReservedTicket";

export default function ReservationPage() {
    const { isLoggedin, loading } = useContext(UsersContext);
    const router = useRouter();

    // useEffect(() => {
    //     if (!loading && !isLoggedin) {
    //         router.push('/');
    //     }
    // }, [isLoggedin, loading, router]);

    // if (loading) return <Loading />;
    // if (!isLoggedin) return null;

    return (
        <div className="container">
            <Link href={'/dashboard'} className="text-decoration-none d-inline-flex align-items-center Link my-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left me-1" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
                Back to Dashboard
            </Link>
            <BookedMsg />
            <ReservedTicket />
        </div>
    );
}