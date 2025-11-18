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
        password: '',
        address: '',
        occupation: ''
    });

    const router = useRouter();
    const { users, setUsers, setCurrentUser, setIsLoggedin } = useContext(UsersContext);

    function handleSubmit(e) {
        e.preventDefault();
        const isFilled = userInfo.name.trim() && userInfo.phone.trim() && userInfo.birthdate.trim() && userInfo.email.trim() && userInfo.nationalID.trim() && userInfo.password.trim() && userInfo.address.trim() && userInfo.occupation.trim();

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

        setUsers([...users, { ...userInfo }]);
        setCurrentUser({ ...userInfo });
        setIsLoggedin(true);
        alert(`Welcome, ${userInfo.name}`);

        setUserInfo({
            name: '',
            birthdate: '',
            phone: '',
            nationalID: '',
            email: '',
            password: '',
            address: '',
            occupation: ''
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
            <div className="mb-3">
                <label htmlFor="occupation" className="form-label">Occupation</label>
                <input
                    type="text"
                    className="form-control"
                    id="occupation"
                    aria-describedby="occupationHelpId"
                    required
                    value={userInfo.occupation}
                    onChange={(e) => {
                        setUserInfo({ ...userInfo, occupation: e.target.value });
                    }}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input
                    type="text"
                    className="form-control"
                    id="address"
                    aria-describedby="addressHelpId"
                    required
                    value={userInfo.address}
                    onChange={(e) => {
                        setUserInfo({ ...userInfo, address: e.target.value });
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