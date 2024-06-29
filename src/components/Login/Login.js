import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
    let { register, handleSubmit, formState: { errors } } = useForm()
    return (
        <div className="signinmain  mx-auto">
            <h1>Login</h1>
            <form className="mx-auto p-4 pt-3 bg-light formmain rounded" onSubmit={handleSubmit()}>
                
                <div className="facid m-2 p-3 ">

                    <input type="text" id="facid" className="form-control w-75 mx-auto" placeholder='Username'{...register("facultyId", { required: true })} />

                </div>
                <div className="password m-2 p-3">
                    <div className="position-relative  d-flex mx-auto w-75 pass-wrapper">
                        <input type='password' id="pass" className="form-control w-100" placeholder='password'{...register("password", { required: true })} />

                    </div>

                </div>
                <button className="btn button-reg  mx-auto d-block">Login</button>
            </form>
            <p className="lead text-center mt-2">New User?
                <Link to="/register" className="fs-4 px-3">Register</Link>
                here
            </p>

        </div>
    )
}

export default Login
