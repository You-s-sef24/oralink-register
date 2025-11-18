"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UsersContext } from "../Contexts/UsersContext";
import ProfilePage from "../Components/ProfilePage";
import Navbar from "../Components/Navbar";

export default function Profile() {
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
            <ProfilePage />
        </div>
    );
}