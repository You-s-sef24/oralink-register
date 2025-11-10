import Link from 'next/link';
import '../globals.css';

export default function WelcomeScreen() {
    return (
        <div className='bg-light'>
            <nav className="navbar p-2">
                <h4 className="fw-bold navbar-brand m-0">OraLink</h4>
            </nav>

            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="d-flex justify-content-center align-items-center gap-2">
                    <div className="col flex-column">
                        <h1 className="text-center fw-bold">Welcome to Our Online Portal</h1>
                        <p className="text-center text-muted">Register as a new patient or log in to manage your appointments.</p>
                        <div className="d-flex justify-content-center gap-1">
                            <Link href={'/register'} className="btn btn-success">Register</Link>
                            <Link href={'/login'} className="btn btn-primary">Login</Link>
                        </div>
                    </div>
                    <div className="col">
                        <img className="rounded w-100" src="/images/clinic.jpg" />
                    </div>
                </div>
            </div>

            <footer className='footer text-muted'>
                <div className='d-flex justify-content-center align-items-center gap-2 mb-2'>
                    <Link className='text-decoration-none text-muted' href={'/help'}>Help</Link>
                    <Link className='text-decoration-none text-muted' href={'/privacy'}>Privacy Policy</Link>
                    <Link className='text-decoration-none text-muted' href={'/contact'}>Contact Us</Link>
                </div>
                <p className='text-center'>© 2025 OraLink, All rights reeserved</p>
            </footer>
        </div>
    );
}