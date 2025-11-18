"use client";

const { createContext, useState, useEffect } = require("react");

export const UsersContext = createContext();

export default function UsersProvider({ children }) {
    const [users, setUsers] = useState([]);
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const savedUsers = localStorage.getItem("users");
        const savedLogin = localStorage.getItem("isLoggedin");
        const savedCurrentUser = localStorage.getItem("currentUser");

        if (savedUsers !== null) setUsers(JSON.parse(savedUsers));
        if (savedLogin !== null) setIsLoggedin(JSON.parse(savedLogin));
        if (savedCurrentUser !== null) setCurrentUser(JSON.parse(savedCurrentUser));
        setLoading(false);
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
        <UsersContext.Provider value={{ users, setUsers, isLoggedin, setIsLoggedin, currentUser, setCurrentUser, loading }}>
            {children}
        </UsersContext.Provider>
    );
}