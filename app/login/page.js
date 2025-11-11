"use client";

import { useContext, useEffect } from "react";
import LoginForm from "../Components/LoginForm";
import { UsersContext } from "../Contexts/UsersContext";
import './login.css';
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const { isLoggedin } = useContext(UsersContext);
    const router = useRouter();

    useEffect(() => {
        if (isLoggedin) {
            router.push('/dashboard');
        }
    }, [isLoggedin, router]);

    if (isLoggedin) return null;

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="d-flex flex-column">
                <div className="d-flex justify-content-center mb-2">
                    <img src="/images/tooth.png" className="w-5" />
                </div>
                <h3 className="text-center fw-bold mb-4">OraLink</h3>
                <LoginForm />
            </div>
        </div>
    );
}