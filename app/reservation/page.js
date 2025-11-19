"use client";

import Link from "next/link";
import Ticket from "../Components/Ticket";
import './reservation.css';
import { useContext, useEffect } from "react";
import { UsersContext } from "../Contexts/UsersContext";
import { useRouter } from "next/navigation";
import Loading from "../loading";

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
        <div>

        </div>
    );
}