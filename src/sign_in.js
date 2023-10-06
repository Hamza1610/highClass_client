import './sign_in.css';
import { useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase-config';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');
    const [regNumber, setRegNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handlePasswordAndData = async () => {
        if (password !== confirmPassword) {
            console.log('Passwords do not match');
            setEmail('Password and Confirm password does not match')
        } else {
            try {
                const user = await createUserWithEmailAndPassword(auth, email, password);
                console.log(user);
            } catch (error) {
                console.error(error.message);
                if (error.message) {
                    setError('Please enter a valid email, atleast 6 character password');
                }
            }
            console.log(password);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        handlePasswordAndData();

    }

    return (
        <div className="sign-in">
            <h1 className="component-label">Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div className="error-div">{error}</div>
                <input
                    className="sign-in-input email"
                    name="email"
                    type="text"
                    placeholder="Email"
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <select
                    className="sign-in-input department"
                    onChange={(e) => { setDepartment(e.target.value) }}
                >
                    <option name="option" value="Electrical engineering" key="Electrical engineering">Electrical engineering</option>
                    <option name="option" value="Computer engineering" key="Computer engineering">Computer engineering</option>
                    <option name="option" value="Mechanical engineering" key="Mechanical engineering">Mechanical engineering</option>
                    <option name="option"value="Civil engineering" key="Civil engineering">Civil engineering</option>
                    <option name="option" value="Telecommunication engineering" key="Telecommunication engineering">Telecommunication engineering</option>
                </select>
                <input
                    onChange={(e) => { setRegNumber(e.target.value) }}
                    className="sign-in-input reg_num"
                    name="reg_num"
                    type="text"
                    placeholder="Registration Number"
                />
                <input
                    onChange={(e) => { setPassword(e.target.value) }}
                    className="sign-in-input password"
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <input
                    onChange={(e) => { setConfirmPassword(e.target.value) }}
                    className="sign-in-input confirm-password"
                    name="confirm-password"
                    type="password"
                    placeholder="Confirm Password"
                />
                <input
                    className="submit-button"
                    type="submit"
                    value="Sign in"
                    name="submit-button"
                />
            </form>
        </div>
    )
}

export default SignIn;
