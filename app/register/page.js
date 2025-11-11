"use client";

import Link from "next/link";
import RegistrationForm from "../Components/RegistrationForm";
import { UsersContext } from "../Contexts/UsersContext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const { isLoggedin } = useContext(UsersContext);
    const router = useRouter();

    useEffect(() => {
        if (isLoggedin) {
            router.push('/dashboard');
        }
    }, [isLoggedin, router]);

    if (isLoggedin) return null;

    return (
        <div className="d-flex align-items-center bg-light vh-100">
            <div className="container d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="fw-bold m-0">OraLink Registration</h5>
                    <Link className="btn btn-primary" href={'/login'}>
                        Login
                    </Link>
                </div>
                <hr className="mb-4" />
                <h1 className="fw-bold">New Patient Registration</h1>
                <p className="text-muted mb-4">Please fill in your details below to get started</p>
                <RegistrationForm />
            </div>
        </div>
    );
}