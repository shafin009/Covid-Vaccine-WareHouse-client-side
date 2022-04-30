import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddNewItem = () => {
    return (
        <div className='container w-50 mx-auto'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control type="email" placeholder="Item Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="url" placeholder="Image URL" required />
                </Form.Group>
                <button class="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none rounded text-lg">Add Item</button>
            </Form>
        </div>
    );
};

export default AddNewItem;