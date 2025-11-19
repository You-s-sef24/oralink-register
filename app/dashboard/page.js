"use client";

import './dashboard.css';
import { useContext, useEffect } from 'react';
import { UsersContext } from '../Contexts/UsersContext';
import { useRouter } from 'next/navigation';
import Navbar from '../Components/Navbar';
import Dashboard from '../Components/Dashboard';

export default function DashboardPage() {
    const { isLoggedin } = useContext(UsersContext);
    const router = useRouter();

    // useEffect(() => {
    //     if (!isLoggedin) {
    //         router.push('/');
    //     }
    // }, [isLoggedin, router]);

    // if (!isLoggedin) return null;

    return (
        <div className="d-flex">
            <Navbar />
            <Dashboard />
        </div>
    );
}