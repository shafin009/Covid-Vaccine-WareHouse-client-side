import React from 'react';

const HomeVaccine = ({ vaccine }) => {



    return (

        <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={vaccine.image} alt="blog" />
            <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Name: {vaccine.name}</h2>
                <h1 className="title-font text-lg font-medium text-gray-600 mb-3">Supplier:{vaccine.supplier}</h1>
                <p className="leading-relaxed mb-3">Description: {vaccine.description}</p>
                <h3 className="title-font text-lg font-medium text-gray-600 mb-3">Price: {vaccine.price}</h3>
                <h3 className="title-font text-lg font-medium text-gray-600 mb-3">Quantity: {vaccine.quantity}</h3>
                <div className="flex items-center flex-wrap ">
                    <button className='btn btn-warning w-50 d-block mx-auto'>Update</button>
                </div>
            </div>
        </div>


    );
}


export default HomeVaccine;