import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/detective-logo.png';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const {login, signInwithGoogle} =useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then(result =>{
            console.log(result.user);
            form.reset();
            navigate(from, {replace: true});
        })
        .catch(err=> console.error(err))
    }

    const handleGoogleSignIn = () =>{
        signInwithGoogle()
        .then(result => {
            console.log(result.user)
            navigate(from, {replace: true});
        })
        .catch(error=> console.error(error))
    }
    return (
        <div className="hero bg-base-200 my-10 py-10">
            <div className="hero-content grid grid-cols-1 lg:grid-cols-2 justify-items-center">
                <div className="text-center">
                    <img className='w-32 mx-auto' src={logo} alt="" />
                    <p className='text-4xl'>DETECTIVE KEVIN</p>
                    <p className="py-6 px-12 text-xl">"No matter what problem you face, you have found an investigation agent that can help you."</p>
                    <button onClick={handleGoogleSignIn} className="btn btn-info font-bold text-white mx-auto flex justify-start"><FcGoogle className='bg-white text-3xl mr-5'/> Sign in with Google</button>
                </div>
                <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pt-10">
                    <h1 className="text-3xl font-bold">Login</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" required className="input input-bordered" />
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