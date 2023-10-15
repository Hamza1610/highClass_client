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
                try {
                    // the key here should be the same with the models
                    const data = {
                        'Email': email,
                        'Course': department,
                        'RegistrationNum': regNumber,
                        'Password': password,
                    }
                    // delete this later original is in the error handler
                    localStorage.setItem('regNumber', regNumber);
                    console.log(data);
                    const response = await fetch('/sign-up', {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: {
                            'Content-Type': 'application/json',
                          },
                    })
                    const json = response.json();
                    if (!response.ok) {
                        setError(json.error)
                    }
                    if (response && response.ok) {
                        // this store unique registration number to the browser
                        localStorage.setItem('regNumber', regNumber);
                        setError('')
                        setDepartment('')
                        setRegNumber('')
                        setPassword('')
            
                        console.log("Registered successfully ");
                    }
                } catch (error) {
                    console.log(error);
                }
                // Later user variable is to be placed above the data form valriable
                const user = await createUserWithEmailAndPassword(auth, email, password);
                console.log(user);
            } catch (error) {
                console.log(error.message);
                if (error.message) {
                    setError(error.message);
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
            <h1 className="component-label">Sign up</h1>
            <form onSubmit={handleSubmit}>
                {error && (
                    <div className="error-div">{error}</div>
                )}
                <input
                    className="sign-in-input email"
                    name="email"
                    type="text"
                    placeholder="Email"
                    onChange={(e) => { setEmail(e.target.value) }}
                    value={email}
                    required
                />
                <select
                    name="department"
                    className="sign-in-input department"
                    onChange={(e) => { setDepartment(e.target.value) }
                    }
                    value={department}
                >
                    <option name="option" value="" key="">Department</option>
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
                    value={regNumber}
                    required
                />
                <input
                    onChange={(e) => { setPassword(e.target.value) }}
                    className="sign-in-input password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    required
                />
                <input
                    onChange={(e) => { setConfirmPassword(e.target.value) }}
                    className="sign-in-input confirm-password"
                    name="confirm-password"
                    type="password"
                    placeholder="Confirm Password"
                    required
                />
                <input
                    className="submit-button"
                    type="submit"
                    value="Sign up"
                    name="submit-button"
                    required
                />
            </form>
        </div>
    )
}

export default SignIn;
