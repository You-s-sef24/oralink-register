"use client";

import Link from 'next/link';
import Navbar from '../Components/Navbar';
import './dashboard.css';
import { useContext, useEffect } from 'react';
import { UsersContext } from '../Contexts/UsersContext';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
    const { isLoggedin } = useContext(UsersContext);
    const router = useRouter();

    useEffect(() => {
        if (!isLoggedin) {
            router.push('/');
        }
    }, [isLoggedin, router]);

    if (!isLoggedin) return null;

    return (
        <div className='bg-light d-flex justify-content-center align-items-center vh-100'>
            <div className="container d-flex flex-column">
                <Navbar />
                <div className='text-center'>
                    <h3>Ready for your appointment?</h3>
                    <p>Click the button below to get your queue number and reserve your spot.</p>
                    <Link href={'/reservation'} className='btn btn-primary'>Reserve Appointment</Link>
                </div>
            </div>
        </div>
    );
}