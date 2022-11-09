import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/detective-logo.png';

const Login = () => {
    return (
        <div className="hero bg-base-200 my-10 py-10">
            <div className="hero-content grid grid-cols-1 lg:grid-cols-2 justify-items-center">
                <div className="text-center">
                    <img className='w-32 mx-auto' src={logo} alt="" />
                    <p className='text-4xl'>DETECTIVE KEVIN</p>
                    <p className="py-6 px-12 text-xl">"No matter what problem you face, you have found an investigation agent that can help you."</p>
                </div>
                <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pt-10">
                    <h1 className="text-3xl font-bold">Login</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" required className="input input-bordered" />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className='mt-5'>
                            <p>New User? <Link className='font-bold' to='/signup'>Create an account</Link></p>
                        </div>
                        <input type="submit" value="Login" className="btn mt-5"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;