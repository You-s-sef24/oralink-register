"use client";

import { useRouter } from "next/navigation";
import { useContext } from "react";
import { UsersContext } from "../Contexts/UsersContext";

export default function Navbar() {
    const router = useRouter();
    const { currentUser, setIsLoggedin, setCurrentUser } = useContext(UsersContext);
    const firstName = (currentUser?.name)?.trim().split(" ")[0];

    function handleLogout() {
        setCurrentUser(null);
        setIsLoggedin(false);
        router.push('/');
    }

    return (
        <nav className="d-flex flex-column">
            <div className="d-flex justify-content-between p-2">
                <div className="d-flex align-items-center gap-1">
                    <img src="images/tooth.png" className="w-5" />
                    <h3 className="navbar-brand fw-bold m-0">OraLink</h3>
                </div>

                <div className="dropdown">
                    <button
                        className="btn dropdown-btn d-flex align-items-center dropdown-toggle"
                        type="button"
                        id="triggerId"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Welcome, {firstName}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="triggerId">
                        <button className="dropdown-item" onClick={() => { handleLogout() }}>Logout</button>
                    </div>
                </div>
            </div>
            <hr className="mt-0" />
        </nav>
    );
}