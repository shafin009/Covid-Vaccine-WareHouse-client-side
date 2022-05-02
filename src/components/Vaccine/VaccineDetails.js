import React from 'react';
import { useNavigate } from 'react-router-dom';

const VaccineDetails = ({ vaccine }) => {

    const { _id, image, name, price, supplier, quantity, description } = vaccine;

    const Navigate = useNavigate()

    const updateButton = id => {

        Navigate(`/inventory/${id}`)

    }

    return (
        <div>
            <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={image} alt="blog" />
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Name: {name}</h2>
                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3">Supplier:{supplier}</h1>
                    <p className="leading-relaxed mb-3">Description: {description}</p>
                    <h3 className="title-font text-lg font-medium text-gray-600 mb-3">Price: {price}</h3>
                    <h3 className="title-font text-lg font-medium text-gray-600 mb-3">Quantity: {quantity}</h3>



                    <button onClick={() => updateButton(_id)} class="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Update</button>


                </div>

            </div>

        </div>
    );
};

export default VaccineDetails;