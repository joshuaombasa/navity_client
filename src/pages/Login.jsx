import React, { useState } from "react";
export default function Login() {

    const [formData, setFormData] = useState({
        email:'',
        password: ''
    })

    function handleChange(event) {
        const {name,value} = event.target
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
            <div className="container">
                <h1>Sign in to your account</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                         type="text" 
                         name="email"
                         value={FormData.email}
                         onChange={handleChange}
                    />
                     <input 
                         type="text" 
                         name="password"
                         value={FormData.password}
                         onChange={handleChange}
                    />
                    <button>Sign in</button>
                </form>
            </div>
        </div>
    )
}