"use client";

import { useContext, useState } from "react";
import { UsersContext } from "../Contexts/UsersContext";
import Toast from "./Toast";

export default function Profile() {
    const [showToast, setShowToast] = useState(false);
    const [msg, setMsg] = useState('');
    const { currentUser, setCurrentUser } = useContext(UsersContext);
    const [editing, setEditing] = useState(false);
    const [editPass, setEditPass] = useState(false);
    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [data, setData] = useState({
        name: currentUser?.name,
        birthdate: currentUser?.birthdate,
        phone: currentUser?.phone,
        nationalID: currentUser?.nationalID,
        email: currentUser?.email,
        address: currentUser?.address,
        occupation: currentUser?.occupation
    });
    const isEmpty = data.address?.trim() === '' || data.name?.trim() === '' || data.email?.trim() === '' || data.birthdate?.trim() === '' || data.nationalID?.trim() === '' && data.phone?.trim() === '' || data.occupation?.trim() === '';

    function handleSave() {
        setCurrentUser({ ...currentUser, ...data });
        setEditing(false);
    }
    function handleSavePass() {
        if (oldPass !== currentUser.password) {
            setShowToast(true);
            setMsg(`Wrong password`);
            return;
        }
        if (newPass.trim('') === '') {
            setShowToast(true);
            setMsg("Please fill empty fields");
            return;
        }

        setCurrentUser({ ...currentUser, password: newPass });
        setShowToast(true);
        setMsg("Password Changed Successfully!");

        setOldPass('');
        setNewPass('');
        setEditPass(false);
    }

    return (
        <div className='w-100 p-3 mt-5'>
            <div className="row align-items-center">
                <div className="col">
                    <h3>My Profile</h3>
                    <p className="text-muted">Manage your personal information</p>
                </div>
                <div className="col">
                    <button className={`${editing ? 'd-none' : ''} d-flex align-items-center btn btn-lg btn-primary float-end gap-2`} onClick={() => { setEditing(true) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pen" aria-hidden="true"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg>
                        Edit Profile
                    </button>
                </div>
            </div>

            <div className="d-flex align-items-center gap-2 rounded shadow p-4 mb-3">
                <div className="p-3 rounded-circle bg-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user text-white" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
                <h3>{currentUser?.name}</h3>
            </div>

            <div className="rounded shadow p-3">
                <h5 className="mb-3">Personal Information</h5>

                <div className="row g-3">
                    {editing ? (
                        <>
                            <div className="col-12 col-md-6 d-flex align-items-center gap-2">
                                <div className="bg-light text-primary rounded p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user text-[#0d6efd]" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                </div>
                                <div>
                                    <label className="text-muted">Full Name</label>
                                    <input className="form-control" type="text" value={data.name} onChange={(e) => { setData({ ...data, name: e.target.value }) }} required />
                                </div>
                            </div>

                            <div className="col-12 col-md-6 d-flex align-items-center gap-2">
                                <div className="bg-light text-primary rounded p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-[#0d6efd]" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                                </div>
                                <div>
                                    <label className="text-muted">Email</label>
                                    <input className="form-control" type="email" value={data.email} onChange={(e) => { setData({ ...data, email: e.target.value }) }} required />
                                </div>
                            </div>

                            <div className="col-12 col-md-6 d-flex align-items-center gap-2">
                                <div className="bg-light text-primary rounded p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone text-[#0d6efd]" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                                </div>
                                <div>
                                    <label className="text-muted">Phone</label>
                                    <input className="form-control" type="tel" value={data.phone} onChange={(e) => { setData({ ...data, phone: e.target.value }) }} required />
                                </div>
                            </div>

                            <div className="col-12 col-md-6 d-flex align-items-center gap-2">
                                <div className="bg-light text-primary rounded p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar text-[#0d6efd]" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                                </div>
                                <div>
                                    <label className="text-muted">Birth Date</label>
                                    <input className="form-control" type="date" value={data.birthdate} onChange={(e) => { setData({ ...data, birthdate: e.target.value }) }} required />
                                </div>
                            </div>

                            <div className="col-12 col-md-6 d-flex align-items-center gap-2">
                                <div className="bg-light text-primary rounded p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hash text-[#0d6efd]" aria-hidden="true"><line x1="4" x2="20" y1="9" y2="9"></line><line x1="4" x2="20" y1="15" y2="15"></line><line x1="10" x2="8" y1="3" y2="21"></line><line x1="16" x2="14" y1="3" y2="21"></line></svg>
                                </div>
                                <div>
                                    <label className="text-muted">National ID</label>
                                    <input className="form-control" type="text" value={data.nationalID} onChange={(e) => { setData({ ...data, nationalID: e.target.value }) }} required />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 d-flex align-items-center gap-2">
                                <div className="bg-light text-primary rounded p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-briefcase" viewBox="0 0 16 16"><path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" /></svg>
                                </div>
                                <div>
                                    <label className="text-muted">Occupation</label>
                                    <input className="form-control" type="text" value={data.occupation} onChange={(e) => { setData({ ...data, occupation: e.target.value }) }} required />
                                </div>
                            </div>
                            <hr />
                            <label className="text-muted">Address</label>
                            <input className="form-control" type="text" value={data.address} onChange={(e) => { setData({ ...data, address: e.target.value }) }} required />
                            <div className="d-flex justify-content-end gap-2">
                                <button className="btn btn-primary" disabled={isEmpty} onClick={() => {
                                    handleSave();
                                }}>Save</button>
                                <button className="btn btn-danger" onClick={() => {
                                    setEditing(false);
                                    setData({
                                        name: currentUser.name,
                                        birthdate: currentUser.birthdate,
                                        phone: currentUser.phone,
                                        nationalID: currentUser.nationalID,
                                        email: currentUser.email,
                                        address: currentUser.address,
                                        occupation: currentUser.occupation
                                    })
                                }}>Cancel</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="col-12 col-md-6 d-flex align-items-center gap-2">
                                <div className="bg-light text-primary rounded p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user text-[#0d6efd]" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                </div>
                                <div>
                                    <label className="text-muted">Full Name</label>
                                    <p className="m-0">{currentUser?.name}</p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 d-flex align-items-center gap-2">
                                <div className="bg-light text-primary rounded p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-[#0d6efd]" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                                </div>
                                <div>
                                    <label className="text-muted">Email</label>
                                    <p className="m-0">{currentUser?.email}</p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 d-flex align-items-center gap-2">
                                <div className="bg-light text-primary rounded p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone text-[#0d6efd]" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                                </div>
                                <div>
                                    <label className="text-muted">Phone</label>
                                    <p className="m-0">{currentUser?.phone}</p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 d-flex align-items-center gap-2">
                                <div className="bg-light text-primary rounded p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar text-[#0d6efd]" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                                </div>
                                <div>
                                    <label className="text-muted">Birth Date</label>
                                    <p className="m-0">{currentUser?.birthdate}</p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 d-flex align-items-center gap-2">
                                <div className="bg-light text-primary rounded p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hash text-[#0d6efd]" aria-hidden="true"><line x1="4" x2="20" y1="9" y2="9"></line><line x1="4" x2="20" y1="15" y2="15"></line><line x1="10" x2="8" y1="3" y2="21"></line><line x1="16" x2="14" y1="3" y2="21"></line></svg>
                                </div>
                                <div>
                                    <label className="text-muted">National ID</label>
                                    <p className="m-0">{currentUser?.nationalID}</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 d-flex align-items-center gap-2">
                                <div className="bg-light text-primary rounded p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-briefcase" viewBox="0 0 16 16"><path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" /></svg>
                                </div>
                                <div>
                                    <label className="text-muted">Occupation</label>
                                    <p className="m-0">{currentUser?.occupation}</p>
                                </div>
                            </div>
                            <hr />
                            <label className="text-muted">Address</label>
                            <p className="m-0">{currentUser?.address}</p>
                        </>
                    )
                    }
                </div >
            </div >

            <div className="shadow rounded mt-3 p-3">
                <h4 className="mb-3">Security</h4>
                {editPass ? (
                    <div>
                        <div>
                            <label>Old Password</label>
                            <input type="password" className="form-control w-25" value={oldPass} onChange={(e) => { setOldPass(e.target.value) }} required />
                        </div>
                        <div>
                            <label>New Password</label>
                            <input type="password" className="form-control w-25" value={newPass} onChange={(e) => { setNewPass(e.target.value) }} required />
                        </div>
                        <div className="d-flex justify-content-end gap-2">
                            <button className="btn btn-primary" disabled={newPass.trim('') === '' || oldPass.trim('') === ''} onClick={() => {
                                handleSavePass();
                            }}>Save</button>
                            <button className="btn btn-danger" onClick={() => {
                                setEditPass(false);
                                setNewPass('');
                                setOldPass('');
                            }}>Cancel</button>
                        </div>
                    </div>
                ) : (
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="m-0">Password</p>
                        <button className="btn btn-outline-primary" onClick={() => { setEditPass(true) }}>Change Password</button>
                    </div>
                )
                }
            </div >
            {showToast && <Toast onClose={() => { setShowToast(false) }} msg={msg} />}
        </div >
    );
}