import React from 'react';
import { Spinner, Button } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ height: '300px' }} className='w-100 d-flex justify-content-center align-items-center'>
            <Button variant="success" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button>
        </div>

    );
};

export default Loading;