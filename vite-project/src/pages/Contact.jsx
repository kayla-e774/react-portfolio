import React, { useState, useEffect } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const validateForm = (data) => {
        console.log(`${data.email}, ${!data.email.trim()}`);
        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email is invalid';
        } else {
            errors.email = '';
        }

        return errors
    }

    useEffect(() => {
        console.log(`${formData.email}`);
        const newErrors = validateForm(formData);
        setErrors(newErrors);
    }, [])

    

    return (
        <>
            <div>
                <h2 className="h2">Contact</h2>
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="InputName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="InputName"/>
                </div>
                <div className="form-group">
                    <label htmlFor="InputEmail" className="form-label">Email address</label>
                    <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        id="InputEmail"
                        aria-describedby="emailHelp"
                        placeholder="example@email.com"/>
                        {errors.email && (
                            <div className="alert alert-danger">{errors.email}</div>
                        )}
                </div>
                <div className="form-group">
                    <label htmlFor="InputMessage" className="form-label">Message</label>
                    <textarea className="form-control" id="InputMessage" rows="3"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}