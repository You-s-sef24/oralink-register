"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    function handleSubmit(e) {
        const isFilled = userData.email && userData.password;
        e.preventDefault();
        if (isFilled) {
            alert("Hello");
        } else {
            alert("Please fill empty fields");
        }
    }

    return (
        <form className="d-flex flex-column bg-white rounded shadow p-4" onSubmit={(e) => { handleSubmit(e) }}>
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
                        <span className="input-group-text" id="basic-addon1"><i class="bi bi-key"></i></span>
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
        </form>
    );
}