import React, { useState } from 'react';
import axios from 'axios'; // Import Axios library for making HTTP requests
import '../style/login.css';
import { useNavigate, Link } from 'react-router-dom'; // Import Link from react-router-dom

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:6005/login', formData);
            if (response.data.status === 'exist') {
                const { user, matchingUsers } = response.data;
                console.log(matchingUsers);
                navigate('/advertisement', { state: { user: user, matchingUsers: matchingUsers } });                
            }
            else if(response.data.status === 'incorrect'){
                setError('Incorrect password');
            }
            else if(response.data.status === 'not exist ok'){
                setError('No advertisement available');
            }
            else if (response.data.status === 'not exist') {
                setError('Incorrect username or password');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setError('An error occurred while processing your request');
        }
        // Reset form fields after submission
        setFormData({
            username: '',
            password: ''
        });
    };
    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <>
            <div className="login-page">
                <h1 style={{ textAlign: "center" }}>Login</h1>
                <div className="form">
                    <form className='login-form' onSubmit={handleSubmit}>
                        <input type="text" name="username" placeholder='username' value={formData.username} onChange={handleChange} />
                        <input type="password" name="password" placeholder='password' value={formData.password} onChange={handleChange} />
                        <button type="submit">Login</button>
                        <p className="error-message">{error}</p>
                        <p className='message'><b>Not Registered? </b></p>
                    </form>
                    {/* Use Link for "Create an account (User)" button */}
                    <Link to="/register/user"><button type="button">Create an account (User)</button></Link>
                    {/* Use Link for "Create an account (Business)" button */}
                    <Link to="/register/business"><button type="button">Advertise your Business</button></Link>
                </div>
            </div>
        </>
    );
};

export default Login;