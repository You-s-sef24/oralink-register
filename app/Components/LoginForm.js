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

    const { users, setCurrentUser, setIsLoggedin } = useContext(UsersContext);
    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();
        const isFilled = userData.email && userData.password;
        const isFound = users.find((user) => user.email === userData.email);

        if (!isFilled) {
            alert("Please fill empty fields");
            return
        }

        if (!isFound) {
            alert("User not found");
            return;
        }

        if (isFound.password !== userData.password) {
            alert("Wrong password");
            return;
        }

        alert(`Welcome, ${isFound.name}`);
        setIsLoggedin(true);
        setCurrentUser(isFound);
        router.push('/dashboard');
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