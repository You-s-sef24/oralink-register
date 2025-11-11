"use client";

const { createContext, useState, useEffect } = require("react");

export const UsersContext = createContext();

export default function UsersProvider({ children }) {
    const [users, setUsers] = useState([]);
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const savedUsers = localStorage.getItem("users");
        const savedLoginState = localStorage.getItem("isLoggedin");
        const savedCurrentUser = localStorage.getItem("currentUser");

        if (savedUsers) setUsers(JSON.parse(savedUsers));
        if (savedLoginState) setIsLoggedin(JSON.parse(savedLoginState));
        if (savedCurrentUser) setCurrentUser(JSON.parse(savedCurrentUser));

    }, []);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    useEffect(() => {
        localStorage.setItem("isLoggedin", JSON.stringify(isLoggedin));
    }, [isLoggedin]);

    useEffect(() => {
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <UsersContext.Provider value={{ users, setUsers, isLoggedin, setIsLoggedin, currentUser, setCurrentUser }}>
            {children}
        </UsersContext.Provider>
    );
}