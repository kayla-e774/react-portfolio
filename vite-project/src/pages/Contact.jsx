import { useState, useEffect } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(validateForm(formData));

        if(errors.email || errors.message || errors.name) {
            return;
        }

        setFormData({ name: '', email: '', message: '' });
        alert("Form Submitted!");
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const validateForm = (data) => {
        const errors = {};

        if(!data.name.trim()) {
            errors.name = 'Name is required.'
        } else {
            errors.name = '';
        }

        if (!data.email.trim()) {
            errors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email is invalid.';
        } else {
            errors.email = '';
        }

        if(!data.message.trim()) {
            errors.message = 'Message is required.';
        } else {
            errors.message = '';
        }

        return errors
    }

    useEffect(() => {
        const newErrors = validateForm(formData);
        setErrors(newErrors);
    }, [formData.email, formData.name, formData.message])

    

    return (
        <>
            <div>
                <h2 className="h2 text-center">Contact</h2>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="InputName" className="form-label">Name</label>
                        <input 
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-control" 
                            id="InputName"
                        />
                        <p></p>
                            {errors.name && (
                                <div className="alert alert-danger">{errors.name}</div>
                            )}
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
                            placeholder="example@email.com"
                        />
                        <p></p>
                            {errors.email && (
                                <div className="alert alert-danger">{errors.email}</div>
                            )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputMessage" className="form-label">Message</label>
                        <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="form-control" 
                            id="InputMessage" 
                            rows="3"
                        />
                        <p></p>
                            {errors.message && (
                                <div className="alert alert-danger">{errors.message}</div>
                            )}
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
}