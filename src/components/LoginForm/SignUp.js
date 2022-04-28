import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Hooks/Loading';


const SignUp = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const Navigate = useNavigate();



    if (loading || updating) {
        return <Loading></Loading>
    }



    const signUpForm = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;


        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

        Navigate('/home')
    }


    return (
        <div>
            <div className="d-flex justify-content-center py-5">
                <div className=" px-5 py-5">
                    <div >
                        <h2 className="text-center">Sign Up</h2>
                        <form onSubmit={signUpForm} className="">
                            <br />
                            <input
                                ref={nameRef}
                                className="mt-2 px-2 py-1 border"
                                type="text"
                                placeholder="Your Name"
                            />
                            <input
                                ref={emailRef}
                                className="mt-2 px-2 py-1 border"
                                type="email"
                                placeholder="Email"
                            />
                            <br />
                            <input
                                ref={passwordRef}
                                className="mt-2 px-2 py-1 border"
                                type="password"
                                placeholder="Password"
                            />
                            <br />
                            <Button variant="btn btn-outline-success w-50 mt-4 mx-auto d-block" type="submit">
                                Sign Up
                            </Button>


                            <Link
                                to="/login"
                                className="text-primary fw-bold d-block text-decoration-none mt-2"
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