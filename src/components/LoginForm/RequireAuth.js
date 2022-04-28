import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Hooks/Loading';



const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user.emailVerified) {
        return <div className='text-center'>
            <h3 className='text-danger'>Your Email is not Verified!!</h3>
            <h5 className='text-success'> Please Verify your E-Mail</h5>
            <br />
            <br/>
            <button
                className='btn btn-warning'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Verification Mail Sent! Cheak your Mailbox');
                }}
            >
                Send Verification E-Mail again
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }

    return children;
};

export default RequireAuth;