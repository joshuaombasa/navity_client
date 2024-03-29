import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }
    return (
        <div className="login-page">
            <div className="login-page-container">
                <h1>Sign in to your account</h1>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="login-inputs">
                        <input
                            type="text"
                            name="email"
                            value={FormData.email}
                            onChange={handleChange}
                            placeholder="Email address"
                            className="email"
                        />
                        <input
                            type="text"
                            name="password"
                            value={FormData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="password"
                        />
                    </div>
                    <button>Sign in</button>
                    <span>Don’t have an account? <Link className="create-account-link">Create one now</Link></span>
                </form>
            </div>
        </div>
    )
}