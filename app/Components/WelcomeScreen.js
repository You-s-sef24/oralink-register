"use client";

import Link from 'next/link';
import '../globals.css';
import { useContext, useEffect } from 'react';
import { UsersContext } from '../Contexts/UsersContext';
import { useRouter } from 'next/navigation';

export default function WelcomeScreen() {
    const { isLoggedin } = useContext(UsersContext);
    const router = useRouter();

    // useEffect(() => {
    //     if (isLoggedin) {
    //         router.push('/dashboard');
    //     }
    // }, [isLoggedin, router]);

    // if (isLoggedin) return null;

    return (
        <div className='bg-light'>
            <nav className="navbar p-2">
                <h4 className="fw-bold navbar-brand m-0">OraLink</h4>
            </nav>

            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="d-flex justify-content-center align-items-center gap-2">
                    <div className="col flex-column">
                        <h1 className="text-center fw-bold">Welcome to Our Online Portal</h1>
                        <p className="text-center text-muted">Register as a new patient or log in to manage your appointments.</p>
                        <div className="d-flex justify-content-center gap-1">
                            <Link href={'/register'} className="btn btn-lg btn-success">Register</Link>
                            <Link href={'/login'} className="btn btn-lg btn-primary">Login</Link>
                        </div>
                    </div>
                    <div className="col">
                        <img className="rounded w-100" src="/images/clinic.jpg" />
                    </div>
                </div>
            </div>

            <footer className='footer text-muted'>
                <div className='d-flex justify-content-center align-items-center gap-2 mb-2'>
                    <Link className='text-decoration-none text-muted' href={'/help'}>Help</Link>
                    <Link className='text-decoration-none text-muted' href={'/privacy'}>Privacy Policy</Link>
                    <Link className='text-decoration-none text-muted' href={'/contact'}>Contact Us</Link>
                </div>
                <p className='text-center'>© 2025 OraLink, All rights reeserved</p>
            </footer>
        </div>
    );
}