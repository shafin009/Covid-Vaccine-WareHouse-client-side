import React from 'react';
import useVaccine from '../../Hooks/useVaccine'

import { Link } from 'react-router-dom'

const ManageInventory = () => {

    const [vaccines, setVaccine] = useVaccine()


    const deleteButton = id => {
        const proceed = window.confirm('Are you Sure ?');

        if (proceed) {

            const url = `https://desolate-basin-05597.herokuapp.com/item/${id}`
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
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {vaccines.map(vaccine => <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <div className="block relative h-48 rounded overflow-hidden">
                                <img alt="" className="object-cover object-center w-full h-full block" src={vaccine.image} />
                            </div>
                            <div className="mt-4">
                                <h4 className="text-gray-700 text-xs tracking-widest title-font mb-1">{vaccine.supplier}</h4>
                                <h2 className="text-gray-900 title-font text-lg font-medium">{vaccine.name}</h2>
                                <p className="text-gray-500 text-xs tracking-widest title-font mb-1">{vaccine.description}</p>
                                <h4 className="mt-1">Price: {vaccine.price}</h4>
                                <h4 className="mt-1">Quantity: {vaccine.quantity}</h4>

                                <button onClick={() => deleteButton(vaccine._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                                    Delete
                                </button>
                            </div>
                        </div>

                        )}



                    </div>
                </div>
            </section>
            <br />

            <Link to='/addnewitem'>
                <button className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none rounded text-lg">Add New Item</button>
            </Link>
        </div >
    );
};

export default ManageInventory;