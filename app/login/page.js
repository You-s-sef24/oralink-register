import LoginForm from "../Components/LoginForm";
import './login.css';

export default function LoginPage() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="d-flex flex-column">
                <div className="d-flex justify-content-center mb-2">
                    <img src="/images/tooth.png" className="w-5" />
                </div>
                <h3 className="text-center fw-bold mb-4">OraLink</h3>
                <LoginForm />
            </div>
        </div>
    );
}