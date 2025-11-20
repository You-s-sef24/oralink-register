"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { UsersContext } from "../Contexts/UsersContext";
import { useRouter } from "next/navigation";
import Toast from "./Toast";

export default function LoginForm() {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });
    const [showToast, setShowToast] = useState(false);
    const [msg, setMsg] = useState('');
    const { users, setCurrentUser, setIsLoggedin } = useContext(UsersContext);
    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();
        const isFilled = userData.email && userData.password;
        const isFound = users.find((user) => user.email === userData.email);

        if (!isFilled) {
            setShowToast(true);
            setMsg("Please fill empty fields");
            return
        }

        if (!isFound) {
            setShowToast(true);
            setMsg("User not found");
            return;
        }

        if (isFound.password !== userData.password) {
            setShowToast(true);
            setMsg("Wrong password");
            return;
        }
        setShowToast(true);
        setMsg(`Welcome, ${isFound.name}`);
        setIsLoggedin(true);
        setCurrentUser(isFound);
        router.push('/dashboard');
    }

    return (
        <form className="d-flex flex-column bg-white rounded shadow w-50 p-4" onSubmit={(e) => { handleSubmit(e) }}>
            <h2 className="fw-bold text-primary text-center m-0">OraLink</h2>
            <hr />
            <h3 className="fw-bold text-center mb-4">Patient Portal Login</h3>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1"><i className="bi bi-envelope"></i></span>
                    </div>
                    <input
                        type="email"
                        className="form-control"
                        name=""
                        id="email"
                        aria-describedby="emailHelpId"
                        required
                        value={userData.email}
                        onChange={(e) => {
                            setUserData({ ...userData, email: e.target.value });
                        }}
                    />
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1"><i className="bi bi-key"></i></span>
                    </div>
                    <input
                        type="password"
                        className="form-control"
                        name=""
                        id="password"
                        aria-describedby="passwordHelpId"
                        required
                        value={userData.password}
                        onChange={(e) => {
                            setUserData({ ...userData, password: e.target.value });
                        }}
                    />
                </div>
            </div>

            <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
            <p className="text-center m-0">Don&apos;t have an account? <Link className="text-decoration-none text-primary" href={'/register'}>Register</Link></p>
            {showToast && <Toast onClose={() => { setShowToast(false) }} msg={msg} />}
        </form>
    );
}