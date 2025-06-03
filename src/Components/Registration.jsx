import { _apiurluser } from '../api_urls';
import { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

export const Registration = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        mobile: '',
        address: '',
        city: '',
        gender: ''

    })
    
    const navigate=useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((preValue) => ({
            ...preValue,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userDetails = {
            "name": data.name, "email": data.email, "password": data.password,
            "mobile": data.mobile, "address": data.address, "city": data.city, "gender": data.gender
        };

        axios.post(_apiurluser + "save", userDetails).then((res) => {
            console.log(res)

        })
        setData(
            {
                name: '',
                email: '',
                password: '',
                mobile: '',
                address: '',
                city: '',
                gender: ''

            }
        )
        navigate('/');

    }
    return (
        <>
            <div className="container-form">
                <h2>Registration Form</h2>
                <form className="form-fields" onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" className='form-input' value={data.name} onChange={handleChange} /><br />
                    <label>Email</label>
                    <input type="text" name="email" className='form-input' value={data.email} onChange={handleChange} /><br />
                    <label>Password</label>
                    <input type="text" name="password" className='form-input' value={data.password} onChange={handleChange} /><br />
                    <label>Mobile</label>
                    <input type="text" name="mobile" className='form-input' value={data.mobile} onChange={handleChange} /><br />
                    <label>Address</label>
                    <input type="text" name="address" className='form-input' value={data.address} onChange={handleChange} /><br />
                    <label>City</label>
                    <select name='city' value={data.city} onChange={handleChange} >
                        <option>select city</option>
                        <option>Indore</option>
                        <option>Bhopal</option>
                        <option>Ujjain</option>
                    </select><br /><br />

                    <span>
                        <label className='radio-button'>Gender</label>
                        <input type="radio" name="gender" value="male"
                            onChange={handleChange} />Male

                        <input type="radio" name="gender" value="female"
                            onChange={handleChange} />Female
                    </span>

                    <button type='submit'>Register</button>
                </form>
            </div>
        </>
    )
}