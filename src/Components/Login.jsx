import { useState } from "react";
import axios from 'axios';
import { _apiurluser } from '../api_urls';
import { useNavigate } from "react-router-dom";

export const Login = ({setLoginData}) => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((preValue) => ({
            ...preValue,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userDetails = { "email": data.email, "password": data.password };
        axios.post(_apiurluser + "login", userDetails).then((res) => {
            console.log(res);
            const obj = res.data;
            //New Added local storage ............................................
            localStorage.setItem("token", obj.token);
            localStorage.setItem("_id", obj.userDetails._id);
            localStorage.setItem("name", obj.userDetails.name);
            localStorage.setItem("email", obj.userDetails.email);
            localStorage.setItem("role", obj.userDetails.role);
            setLoginData(obj.userDetails.role)
            setData({ email: '', password: '' });

            //for redirect user according to role..............
            if (obj.userDetails.role == "admin")
              navigate("/admin");
            else if(obj.userDetails.role=="user")
            navigate("/user");
            else
                console.log("Login sucessful");

        }).catch((error) => {
            console.log("Login unsucessful");
        })

    }
    return (
        <>
            <div className="container-form">
                <h2>Login Page</h2>
                <form className="form-fields" onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type="text" name="email" className='form-input' value={data.email} onChange={handleChange} /><br />
                    <label>Password</label>
                    <input type="text" name="password" className='form-input' value={data.password} onChange={handleChange} />
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    )
}