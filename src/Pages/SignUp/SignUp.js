import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import logo from '../../assets/detective-logo.png';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const SignUp = () => {
    const {createUser, signInwithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () =>{
        signInwithGoogle()
        .then(result => {
            console.log(result.user)
            navigate(from, {replace: true});
        })
        .catch(error=> console.error(error))
    }

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            console.log(result.user);
            navigate(from, {replace: true});
            form.reset();
        })
        .catch(err => console.error(err))
    }
    return (
        <div className="hero bg-base-200 my-10 py-10">
            <div className="hero-content grid grid-cols-1 lg:grid-cols-2 justify-items-center">
                <div className="text-center">
                    <img className='w-32 mx-auto' src={logo} alt="" />
                    <p className='text-4xl'>DETECTIVE KEVIN</p>
                    <p className="py-6 px-12 text-xl">"No matter what problem you face, you have found an investigation agent that can help you."</p>
                    <button onClick={handleGoogleSignIn} className="btn btn-info font-bold text-white mx-auto flex justify-start"><FcGoogle className='bg-white text-3xl mr-5'/> Sign up with Google</button>
                </div>
                <form onSubmit={handleSignUp} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pt-10">
                    <h1 className="text-3xl font-bold">SignUp</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Your Name" required
                                className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="text" required placeholder="Email address" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="Password" required className="input input-bordered" />
                        </div>
                        <div className='mt-5'>
                            <p>Already have an account? <Link className='font-bold' to='/login'>Login</Link></p>
                        </div>
                        <input type="submit" value="Sign up" className="btn mt-5" />
                        
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default SignUp;