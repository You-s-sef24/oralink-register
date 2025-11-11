"use client";

import { useContext, useState } from "react";
import { UsersContext } from "../Contexts/UsersContext";
import { useRouter } from "next/navigation";

export default function RegistrationForm() {
    const [userInfo, setUserInfo] = useState({
        name: '',
        birthdate: '',
        phone: '',
        nationalID: '',
        email: '',
        password: ''
    });

    const router = useRouter();
    const { users, setUsers, setCurrentUser, setIsLoggedin } = useContext(UsersContext);

    function handleSubmit(e) {
        e.preventDefault();
        const isFilled = userInfo.name && userInfo.phone && userInfo.birthdate && userInfo.email && userInfo.nationalID && userInfo.password;
        const isFound = users.find(
            (user) => user.email === userInfo.email || user.nationalID === userInfo.nationalID
        );

        if (!isFilled) {
            alert("Please fill empty fields");
            return;
        }

        if (isFound) {
            alert("User already exists!");
            return;
        }

        setUsers([...users, userInfo]);
        setIsLoggedin(true);
        setCurrentUser(userInfo);
        alert(`Welcome, ${userInfo.name}`);

        setUserInfo({
            name: '',
            birthdate: '',
            phone: '',
            nationalID: '',
            email: '',
            password: ''
        });

        router.push('/dashboard');
    }
    return (
        <form className="p-4 bg-white shadow rounded" onSubmit={(e) => { handleSubmit(e) }}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="namelHelpId"
                    required
                    value={userInfo.name}
                    onChange={(e) => {
                        setUserInfo({ ...userInfo, name: e.target.value });
                    }}
                />
            </div>
            <div className="d-flex gap-2 mb-3">
                <div className="col">
                    <label htmlFor="birthdate" className="form-label">Date of Birth</label>
                    <input
                        type="date"
                        className="form-control w-100"
                        id="birthdate"
                        aria-describedby="birthdateHelpId"
                        required
                        value={userInfo.birthdate}
                        onChange={(e) => {
                            setUserInfo({ ...userInfo, birthdate: e.target.value });
                        }}
                    />
                </div>
                <div className="col">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                        type="tel"
                        className="form-control w-100"
                        id="phone"
                        aria-describedby="phoneHelpId"
                        required
                        value={userInfo.phone}
                        onChange={(e) => {
                            setUserInfo({ ...userInfo, phone: e.target.value });
                        }}
                    />
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="id" className="form-label">National ID</label>
                <input
                    type="text"
                    className="form-control"
                    id="id"
                    aria-describedby="idHelpId"
                    required
                    value={userInfo.nationalID}
                    onChange={(e) => {
                        setUserInfo({ ...userInfo, nationalID: e.target.value });
                    }}
                />
            </div>
            <div className="d-flex gap-2 mb-3">
                <div className="col">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelpId"
                        required
                        value={userInfo.email}
                        onChange={(e) => {
                            setUserInfo({ ...userInfo, email: e.target.value });
                        }}
                    />
                </div>
                <div className="col">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        aria-describedby="passwordHelpId"
                        required
                        value={userInfo.password}
                        onChange={(e) => {
                            setUserInfo({ ...userInfo, password: e.target.value });
                        }}
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
    );
}