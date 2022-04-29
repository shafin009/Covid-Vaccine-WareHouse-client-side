import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../../Hooks/Loading';
import './login.css'




const Login = () => {


    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorMessageShow;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorMessageShow = <p className='text-danger text-center'>Error: {error?.message}</p>
    }

    const formSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const passwordReset = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Password Reset! Cheak Mail!')
        }
        else {
            toast('Enter your E-Mail!');
        }
    }

    return (
        <div className='login'>
            <div className="d-flex justify-content-center py-5">
                <div className=" px-5 py-5">
                    <div >
                        <h2 className="text-center text-5xl text-emerald-50">Log In</h2>
                        <form onSubmit={formSubmit} className="">
                            <br />
                            <input
                                ref={emailRef}
                                className="mt-2 px-2 py-1 border"
                                type="email"
                                placeholder="Email"
                                required
                            />
                            <br />
                            <input
                                ref={passwordRef}
                                className="mt-2 px-2 py-1 border"
                                type="password"
                                placeholder="Password"
                                required
                            />
                            <br />
                            <Button variant="btn btn-primary w-50 mt-4 mx-auto d-block" type="submit">
                                Log In
                            </Button>


                            <Link
                                to="/signup"
                                className="text-warning fs-4 fw-bold d-block text-decoration-none mt-2"
                            >
                                If New ! Sign UP !
                            </Link>

                            <button className='btn btn-link text-danger fs-4 fw-bold d-block mb-3 text-decoration-none' onClick={passwordReset}>Reset Password</button>
                            {errorMessageShow}
                        </form>
                    </div>
                </div>
            </div>
            <SocialLogin></SocialLogin>
            <ToastContainer />

        </div>
    );
};

export default Login;