import React from 'react';
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom'
import auth from '../../firebase.init';
import Loading from '../../Hooks/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorDiv;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorDiv = <p className='text-danger text-center'>Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate('/home');
    }

    return (
        <div>
            {errorDiv}
            <div className='container d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-black w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-black w-50'></div>
            </div>

            <div >
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-danger w-50 d-block mx-auto my-2'>

                    <span className='px-2'>Google Sign In</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-dark w-50 d-block mx-auto my-2'>

                    <span className='px-2'>Github Sign In</span>
                </button>

            </div>

        </div >
    );
};

export default SocialLogin;