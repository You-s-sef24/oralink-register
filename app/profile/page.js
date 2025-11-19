"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UsersContext } from "../Contexts/UsersContext";
import Profile from "../Components/Profile";
import Navbar from "../Components/Navbar";

export default function ProfilePage() {
    const { isLoggedin } = useContext(UsersContext);
    const router = useRouter();

    // useEffect(() => {
    //     if (!isLoggedin) {
    //         router.push('/');
    //     }
    // }, [isLoggedin, router]);

    // if (!isLoggedin) return null;

    return (
        <div>
            <Navbar />
            <Profile />
        </div>
    );
}