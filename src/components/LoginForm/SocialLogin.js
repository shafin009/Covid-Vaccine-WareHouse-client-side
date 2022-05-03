import React from 'react';
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init';
import Loading from '../../Hooks/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();


    let from = location.state?.from?.pathname || "/";
    let customErrorMessage;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        customErrorMessage = <p className='text-danger text-center'>Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            {customErrorMessage}

            <div >
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-danger w-50 d-block mx-auto my-2'>

                    <span className='px-2'>Google Sign In</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-dark w-50 d-block mx-auto '>

                    <span className='px-2'>Github Sign In</span>
                </button>

            </div>

        </div >
    );
};

export default SocialLogin;