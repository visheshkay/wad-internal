import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import './Register.css'

function Register() {
    let {register,handleSubmit,formState:{errors}}=useForm();
    return (
        <div className="signupmain w-70 mx-auto">
            <h1>Register</h1>
    
    <form className=" mx-auto p-4 pt-3 bg-light formmain rounded" onSubmit={handleSubmit()}>
    <div className="facid mb-4">
            
            <input type="text" id="facid" className="form-control w-50 mx-auto m-3" placeholder="Name" {...register("name",{required:true,minLength:4,maxLength:10})}/>
            
        </div>

            <div className="uname mb-2">

            <input type="text" id="uname" className="form-control w-50 mx-auto m-3"  placeholder="Username"{...register("username",{required:true,minLength:4,maxLength:20})}/>
            
        </div>
        <div className="password mb-2">
            <div className="position-relative  d-flex mx-auto w-50 pass-wrapper">
            <input type='password' id="pass" className="form-control w-100" placeholder="Password" {...register("password",{required:true,minLength:8})}/>
            </div>
            
        </div>
        <div className="password mb-2">
            <div className="position-relative  d-flex mx-auto w-50 pass-wrapper">
            <input type='password' id="pass" className="form-control w-100" placeholder=" Confirm Password" {...register("cpassword",{required:true,minLength:8})}/>
            </div>
            
        </div>
        <div className="email mb-2">
            
            <input type="email" id="email" className="form-control w-50 mx-auto m-3" placeholder="email" {...register("email",{required:true})}/>
            
        </div>
        <div className="email mb-2">
            
            <input type="email" id="email" className="form-control w-50 mx-auto m-3" placeholder="confirm email" {...register("email",{required:true})}/>
            
        </div>
        <div className="Form-group mb-2">
<input type="number" className="form-control mx-auto w-50 m-3" id="phonenumber" placeholder="Phone number" {...register('phonenumber',{required:true,minLength:10,maxLength:10})} />

</div>
<div className="Form-group mb-2">
<input type="number" className="form-control mx-auto w-50 m-3" id="age" placeholder="Age" {...register('age',{required:true,minLength:10,maxLength:10})} />

</div>
    <div className="email mb-2">     
        <input type="text" id="zip" className="form-control w-50 mx-auto m-3" placeholder="zipcode" {...register("zipcode",{required:true})}/>
    </div>
    <div className="email mb-2">     
        <input type="text" id="confirm zip" className="form-control w-50 mx-auto m-3" placeholder="confirm zipcode" {...register("czipcode",{required:true})}/>
    </div>
    <div className="email mb-2">     
        <label htmlFor="gender">Gender</label>
        <select id="gender">
            <option>Male</option>
            <option>Female</option>
        </select>
    </div>
    <div className="email mb-2">     
        <label htmlFor="preffered">preffered products</label>
        <select id="preffered">
            <option>Technical</option>
            <option>Non Technical</option>
        </select>
    </div>
    <div className="Form-group mb-2">
<input type="text" className="form-control mx-auto w-50 m-3" id="occupation" placeholder="Occupation" {...register('occupation',{required:true,minLength:10,maxLength:10})} />

</div>
<div className="Form-group mb-2">
<input type="text" className="form-control mx-auto w-50 m-3" id="state" placeholder="State" {...register('state',{required:true,minLength:10,maxLength:10})} />

</div>
        <button className="btn button-reg  mx-auto d-block" >Register</button>
    </form>
    <p className="lead text-center mt-2">Already Registered?
    <Link to="/login" className="fs-4 ps-3">Login</Link>
    </p>
</div>
    )
}

export default Register
