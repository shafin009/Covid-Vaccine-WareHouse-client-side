import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Hooks/Loading';
import './signup.css'

const SignUp = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');

    const [
        createUserWithEmailAndPassword, loading,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);

    const Navigate = useNavigate();



    if (loading || updating) {
        return <Loading></Loading>
    }



    const formsignUp = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;


        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

        Navigate('/home')
    }


    return (
        <div className='signup'>
            <div className="d-flex justify-content-center py-5">
                <div className=" px-5 py-5">
                    <div >
                        <h2 className="text-center text-5xl text-emerald-50">Sign Up</h2>
                        <form onSubmit={formsignUp} className="">
                            <br />
                            <input
                                ref={nameRef}
                                className="mt-2 px-2 py-1 border"
                                type="text"
                                placeholder="Your Name"
                                required
                            />
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
                                Sign Up
                            </Button>


                            <Link
                                to="/login"
                                className="text-warning fs-4 fw-bold d-block text-decoration-none mt-2"
                            >
                                Already an account?
                            </Link>


                        </form>
                    </div>
                </div>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;