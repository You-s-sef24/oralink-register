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
        <div className="d-flex justify-content-center align-items-center bg-light vh-100">
            <LoginForm />
        </div>
    );
}