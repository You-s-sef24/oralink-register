"use client";

import { createContext, useState, useEffect } from "react";

export const UsersContext = createContext();

export default function UsersProvider({ children }) {
    const [users, setUsers] = useState([]);
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUsers = localStorage.getItem("users");
        const storedCurrentUser = localStorage.getItem("currentUser");
        const storedIsLoggedin = localStorage.getItem("isLoggedin");

        if (storedUsers) setUsers(JSON.parse(storedUsers));
        if (storedCurrentUser) setCurrentUser(JSON.parse(storedCurrentUser));
        if (storedIsLoggedin) setIsLoggedin(JSON.parse(storedIsLoggedin));

        setLoading(false);
    }, []);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    useEffect(() => {
        localStorage.setItem("isLoggedin", JSON.stringify(isLoggedin));
    }, [isLoggedin]);

    useEffect(() => {
        if (currentUser) {
            localStorage.setItem("currentUser", JSON.stringify(currentUser));

            const index = users.findIndex(user => user.id === currentUser.id);
            if (index !== -1) {
                const newUsers = [...users];
                newUsers[index] = currentUser;
                setUsers(newUsers);
            }
            
        } else {
            localStorage.removeItem("currentUser");
        }
    }, [currentUser]);

    return (
        <UsersContext.Provider value={{ users, setUsers, isLoggedin, setIsLoggedin, currentUser, setCurrentUser, loading }}>
            {children}
        </UsersContext.Provider>
    );
}