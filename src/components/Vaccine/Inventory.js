import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'



const Inventory = () => {
    const [vaccine, setVaccine] = useState({});
    const { _id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/inventory/${_id}`)
            .then(res => res.json())
            .then(data => setVaccine(data))
    }, [_id])

    return (
        <div>
            <section className="text-gray-700 bg-white body-font">

                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center '>
                    <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={vaccine.image} alt="blog" />
                        <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Name: {vaccine.name}</h2>
                            <h1 className="title-font text-lg font-medium text-gray-600 mb-3">Supplier:{vaccine.supplier}</h1>
                            <p className="leading-relaxed mb-3">Description: {vaccine.description}</p>
                            <h3 className="title-font text-lg font-medium text-gray-600 mb-3">Price: {vaccine.price}</h3>
                            <h3 className="title-font text-lg font-medium text-gray-600 mb-3">Quantity: {vaccine.quantity}</h3>
                            <button class="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Update</button>
                        </div>
                    </div>
                </div>
            </section>
            <button class="flex mx-auto text-white bg-red-800 border-0 py-2 px-8 focus:outline-none rounded text-lg">Deliver Item</button>
            <br />
            <div className='container w-50 mx-auto'>
                <Form>
                    <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
                        <Form.Label>Increase Item From</Form.Label>
                        <Form.Control type="email" placeholder="Item Name" disabled />
                    </Form.Group>

                    <Form.Group className="mb-3 text-center" controlId="formBasicPassword">
                        <Form.Label >Quantity</Form.Label>
                        <Form.Control type="number" placeholder="Quantity" required />
                    </Form.Group>
                    <button class="flex mx-auto text-black bg-yellow-500 border-0 py-2 px-8 focus:outline-none rounded text-lg">Restock Item</button>
                </Form>
            </div>
            <br />
            <Link to='/manageinventory'><button className="btn btn-success d-grid gap-2 col-6 mx-auto" >Manage Inventory</button>
            </Link>
        </div>
    );
};

export default Inventory;