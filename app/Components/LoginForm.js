"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { UsersContext } from "../Contexts/UsersContext";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });
    const [msg, setMsg] = useState('');
    const { users, setCurrentUser, setIsLoggedin } = useContext(UsersContext);
    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();
        const isFilled = userData.email && userData.password;
        const isFound = users.find((user) => user.email === userData.email);

        if (!isFilled) {
            setMsg("Please fill empty fields");
            return
        }

        if (!isFound) {
            setMsg("User not found");
            return;
        }

        if (isFound.password !== userData.password) {
            setMsg("Wrong password");
            return;
        }
        setMsg(`Welcome, ${isFound.name}`);
        setIsLoggedin(true);
        setCurrentUser(isFound);
        router.push('/dashboard');
    }

    return (
        <form className="d-flex flex-column bg-white rounded shadow w-50 p-4" onSubmit={(e) => { handleSubmit(e) }}>
            <div className="d-flex justify-content-center">
                <img className="w-75" src="/OraLink (1).png" alt="OraLink" />
            </div>
            <hr />

            {msg !== '' ? (
                <div
                    className="alert alert-danger alert-dismissible fade show"
                    role="alert"
                >
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setMsg('')}
                        aria-label="Close"
                    ></button>
                    <strong>{msg}</strong>
                </div>
            ) : null}

            <h3 className="fw-bold text-center mb-2">Patient Portal Login</h3>
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
        </form>
    );
}