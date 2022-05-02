import React from 'react';
import useVaccine from '../../Hooks/useVaccine'

import { Link } from 'react-router-dom'

const ManageInventory = () => {

    const [vaccines, setVaccine] = useVaccine()


    const deleteButton = id => {
        const proceed = window.confirm('Are you Sure ?');

        if (proceed) {

            const url = `http://localhost:5000/item/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    const afterDelete = vaccines.filter(vaccine => vaccine._id !== id)
                    setVaccine(afterDelete)

                })

        }

    }



    return (
        <div>
            <br />
            <section className="text-gray-700 bg-white body-font">

                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center '>


                    {vaccines.map(vaccine => <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={vaccine.image} alt="blog" />
                        <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Name: {vaccine.name}</h2>
                            <h1 className="title-font text-lg font-medium text-gray-600 mb-3">Supplier:{vaccine.supplier}</h1>
                            <p className="leading-relaxed mb-3">Description: {vaccine.description}</p>
                            <h3 className="title-font text-lg font-medium text-gray-600 mb-3">Price: {vaccine.price}</h3>
                            <h3 className="title-font text-lg font-medium text-gray-600 mb-3">Quantity: {vaccine.quantity}</h3>


                            <button onClick={() => deleteButton(vaccine._id)} class="flex mx-auto text-black bg-red-500 border-0 py-2 px-8 focus:outline-none rounded text-lg">Delete</button>

                        </div>
                    </div>

                    )}
                </div>
            </section>
            <br />

            <Link to='/addnewitem'>
                <button className="flex mx-auto text-black bg-purple-500 border-0 py-2 px-8 focus:outline-none rounded text-lg">Add New Item</button>
            </Link>
        </div >
    );
};

export default ManageInventory;