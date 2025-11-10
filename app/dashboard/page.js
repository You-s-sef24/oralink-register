import Link from 'next/link';
import Navbar from '../Components/Navbar';
import './dashboard.css';

export default function DashboardPage() {
    return (
        <div className='bg-light d-flex justify-content-center align-items-center vh-100'>
            <div className="container d-flex flex-column">
                <Navbar />
                <div className='text-center'>
                    <h3>Ready for your appointment?</h3>
                    <p>Click the button below to get your queue number and reserve your spot.</p>
                    <Link href={'/reservation'} className='btn btn-primary'>Reserve Appointment</Link>
                </div>
            </div>
        </div>
    );
}